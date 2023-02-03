import "./Movies.css"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
import { useState, useEffect } from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import { moviesAPI } from "../../utils/MoviesApi"
import { mainAPI } from "../../utils/MainApi"

function Movies({ savedMovies, getSavedMovies, deleteMovie, filterMovies }) {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [isShortFilm, setIsShortFilm] = useState(false)
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [displayedMoviesIndex, setDisplayedMoviesIndex] = useState(0)
  const [loadMore, setLoadMore] = useState(false)
  const [moviesDisplayState, setMoviesDisplayState] = useState("unloaded")
  const [clientWidth, clientHeight] = useWindowSize()

  let increment = 0
  if (clientWidth > 980) increment = 3
  else if (clientWidth >= 320) increment = 2

  useEffect(() => {
    const localQuery = JSON.parse(localStorage.getItem("query"))
    const localIsShortFilm = JSON.parse(localStorage.getItem("isShortFilm"))
    const localMovies = JSON.parse(localStorage.getItem("movies"))

    getSavedMovies()

    if (
      localQuery !== null &&
      localIsShortFilm !== null &&
      localMovies !== null
    ) {
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
    } else {
      moviesAPI
        .getMovies()
        .then((movies) => {
          localStorage.setItem("query", JSON.stringify(null))
          localStorage.setItem("isShortFilm", false)
          localStorage.setItem("movies", JSON.stringify(movies))
          setMovies(movies)
          setMoviesDisplayState("loaded")
        })
        .catch((err) => {
          setMoviesDisplayState("failed-to-fetch")
          console.log(err)
        })
    }
  }, [])

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
      submitQuery()
    }
  }, [isShortFilm])

  function submitQuery() {
    setMoviesDisplayState("loading")
    const localMovies = JSON.parse(localStorage.getItem("movies"))
    const filteredMovies = filterMovies(localMovies, query, isShortFilm)

    if (filteredMovies.length > 0) {
      setMovies(filteredMovies)
      setMoviesDisplayState("results-found")
    } else {
      setMoviesDisplayState("nothing-found")
    }
    localStorage.setItem("query", JSON.stringify(query))
    localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm))
  }

  function handleSubmitQuery() {
    if (query) {
      submitQuery()
    }
  }

  function renderMovies() {
    setLoadMore(false)
    const x = movies.length - increment
    setDisplayedMovies(movies.slice(0, x > 0 ? increment : movies.length))
    if (movies.length > increment) {
      setDisplayedMoviesIndex(increment)
      setLoadMore(true)
    }
  }

  function handleLoadMore() {
    setDisplayedMovies(movies.slice(0, displayedMoviesIndex + increment))
    if (displayedMoviesIndex + increment >= movies.length) {
      setDisplayedMoviesIndex(0)
      setLoadMore(false)
    } else {
      setDisplayedMoviesIndex(displayedMoviesIndex + increment)
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

  function saveMovie(movieID) {
    const index = movies.findIndex((movie) => movie.id == movieID)

    if (index !== -1) {
      mainAPI
        .saveMovie({
          country: movies[index].country,
          director: movies[index].director,
          duration: movies[index].duration,
          year: movies[index].year,
          description: movies[index].description,
          image: `https://api.nomoreparties.co${movies[index].image.url}`,
          trailerLink: movies[index].trailerLink,
          thumbnail: `https://api.nomoreparties.co${movies[index].image.formats.thumbnail.url}`,
          movieId: movies[index].id,
          nameRU: movies[index].nameRU,
          nameEN: movies[index].nameEN,
        })

        .then((res) => {
          getSavedMovies()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function findMovieMatch(id) {
    return savedMovies.findIndex((movie) => movie.movieId == id)
  }

  return (
    <div className="movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
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
                      findMovieMatch(movie.id) != -1 ? "saved" : "save"
                    }
                    onCardClick={handleMovieCardClick}
                  />
                )
              })}
            </MoviesCardList>

            {loadMore ? (
              <button onClick={handleLoadMore} className="movies__loadmore-btn">
                Еще
              </button>
            ) : (
              <></>
            )}
          </>
        ) : moviesDisplayState === "failed-to-fetch" ? (
          <h2 className="movies__nothing-found">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </h2>
        ) : moviesDisplayState === "nothing-found" ? (
          <h2 className="movies__nothing-found">Ничего не найдено</h2>
        ) : (
          <></>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Movies
