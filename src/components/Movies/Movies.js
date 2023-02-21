import "./Movies.scss"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
import { useState, useEffect } from "react"
// import * as RUACT from "react"
import { useWindowWidth } from "../../hooks/useWindowWidth"
import { moviesAPI } from "../../utils/MoviesApi"
import APIResponseMessage from "../APIErrorMessage/APIResponseMessage"
import {
  CARDS_SHOW_MORE,
  CSS_BREAKPOINTS,
  CANT_CONNECT_TO_SERVER,
} from "../../utils/constants"

function Movies({
  movies,
  setMovies,
  savedMovies,
  deleteMovie,
  saveMovie,
  filterMovies,
}) {
  const [query, setQuery] = useState("")
  const [isShortFilm, setIsShortFilm] = useState(false)
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [displayedMoviesIndex, setDisplayedMoviesIndex] = useState(0)
  const [loadMore, setLoadMore] = useState(false)
  const [moviesDisplayState, setMoviesDisplayState] = useState("unloaded")
  const clientWidth = useWindowWidth()
  const [apiErrorCode, setApiErrorCode] = useState(null)

  useEffect(() => {
    const localQuery = JSON.parse(localStorage.getItem("query"))
    const localIsShortFilm = JSON.parse(localStorage.getItem("isShortFilm"))
    const localMovies = JSON.parse(localStorage.getItem("movies"))

    if (
      localQuery !== null &&
      localIsShortFilm !== null &&
      localMovies !== null
    ) {
      setMoviesDisplayState("loading")

      setQuery(localQuery)
      setIsShortFilm(localIsShortFilm)

      if (typeof localQuery === "string" && localQuery.trim() === "") {
        setMovies(localMovies)
        setMoviesDisplayState("loaded")
      } else {
        const filteredMovies = filterMovies(
          localMovies,
          localQuery,
          localIsShortFilm
        )

        if (filteredMovies.length > 0) {
          setMovies(filteredMovies)
          setMoviesDisplayState("results-found")
        } else {
          setMovies(localMovies)
          setMoviesDisplayState("nothing-found")
        }
      }
    }
  }, [])

  let loadMoreCount = 0
  if (clientWidth > CSS_BREAKPOINTS.desktop)
    loadMoreCount = CARDS_SHOW_MORE.desktop
  else loadMoreCount = CARDS_SHOW_MORE.tablet

  let initCount = 0
  if (clientWidth > CSS_BREAKPOINTS.desktop) initCount = 12
  else if (clientWidth > CSS_BREAKPOINTS.mobile) initCount = 8
  else initCount = 5

  useEffect(() => {
    setDisplayedMoviesIndex(0)
    renderMovies()
  }, [movies, clientWidth])

  useEffect(() => {
    if (
      (moviesDisplayState === "results-found" ||
        moviesDisplayState === "nothing-found") &&
      query
    ) {
      handleSubmitQuery()
    }
  }, [isShortFilm])

  function handleSubmitQuery() {
    if (query === "") {
      setMoviesDisplayState("unloaded")
      setApiErrorCode(903)
      setTimeout(() => {
        setApiErrorCode(null)
      }, 2000)
      return
    }
    setMoviesDisplayState("loading")
    localStorage.setItem("query", JSON.stringify(query))
    localStorage.setItem("isShortFilm", isShortFilm)

    const localMovies = JSON.parse(localStorage.getItem("movies"))

    if (localMovies !== null) {
      const filteredMovies = filterMovies(localMovies, query, isShortFilm)
      if (filteredMovies.length > 0) {
        setMovies(filteredMovies)

        setTimeout(() => {
          setMoviesDisplayState("results-found")
        }, 1000)
      } else {
        setMoviesDisplayState("nothing-found")
      }
    } else {
      moviesAPI
        .getMovies()
        .then((movies) => {
          const filteredMovies = filterMovies(movies, query, isShortFilm)
          if (filteredMovies.length > 0) {
            setMovies(filteredMovies)
            setMoviesDisplayState("results-found")
          } else {
            setMoviesDisplayState("nothing-found")
          }

          localStorage.setItem("movies", JSON.stringify(movies))
        })
        .catch((err) => {
          setMoviesDisplayState("failed-to-fetch")
          console.log(err)
        })
    }
  }

  function renderMovies() {
    setLoadMore(false)
    const x = movies.length - initCount
    setDisplayedMovies(movies.slice(0, x > 0 ? initCount : movies.length))
    if (movies.length > loadMoreCount) {
      setDisplayedMoviesIndex(initCount)
      setLoadMore(true)
    }
  }

  function handleLoadMore() {
    setDisplayedMovies(movies.slice(0, displayedMoviesIndex + loadMoreCount))
    if (displayedMoviesIndex + loadMoreCount >= movies.length) {
      setDisplayedMoviesIndex(0)
      setLoadMore(false)
    } else {
      setDisplayedMoviesIndex(displayedMoviesIndex + loadMoreCount)
      setLoadMore(true)
    }
  }

  function handleMovieCardClick(movieID, savedState) {
    if (savedState === "save") {
      saveMovie(movieID)
    } else if (savedState === "saved") {
      deleteMovie(movieID)
    }
  }

  function findMovieMatch(id) {
    return savedMovies.findIndex((movie) => movie.movieId === id)
  }

  return (
    <div className="movies-wrapper">
      <APIResponseMessage apiErrorCode={apiErrorCode} />
      <div className="movies">
        <Header>
          <NavMoviesAccount />
        </Header>
        <main className="movies__container">
          <h1 className="movies-hidden-header">Фильмы</h1>
          <MoviesSearch
            query={query}
            isShortFilm={isShortFilm}
            setQuery={setQuery}
            setIsShortFilm={setIsShortFilm}
            onSubmit={handleSubmitQuery}
          />
          {moviesDisplayState === "loading" ? (
            <Preloader />
          ) : moviesDisplayState === "results-found" ? (
            <>
              <MoviesCardList>
                {displayedMovies.map((movie, index) => {
                  return (
                    <MoviesCard
                      key={movie.id.toString() || index}
                      movieID={movie.id.toString()}
                      title={movie.nameRU}
                      duration={movie.duration}
                      poster={
                        movie?.image?.url
                          ? `https://api.nomoreparties.co${movie.image.url}`
                          : require("../../images/poster_ref.png")
                      }
                      trailerLink={movie.trailerLink}
                      savedState={
                        findMovieMatch(movie.id) !== -1 ? "saved" : "save"
                      }
                      onCardClick={handleMovieCardClick}
                    />
                  )
                })}
              </MoviesCardList>

              {loadMore ? (
                <button
                  onClick={handleLoadMore}
                  className="movies__loadmore-btn"
                >
                  Еще
                </button>
              ) : (
                <></>
              )}
            </>
          ) : moviesDisplayState === "failed-to-fetch" ? (
            <h2 className="movies__nothing-found">{CANT_CONNECT_TO_SERVER}</h2>
          ) : moviesDisplayState === "nothing-found" ? (
            <h2 className="movies__nothing-found">Ничего не найдено</h2>
          ) : (
            <></>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Movies
