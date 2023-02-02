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

function Movies({ savedMovies, setSavedMovies, deleteMovie }) {
  const [movies, setMovies] = useState([])
  // const [savedMovies, setSavedMovies] = useState([])
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

      getSavedMovies()
    }
  }, [])

  useEffect(() => {
    setDisplayedMoviesIndex(0)
    renderMovies()
  }, [movies, clientWidth])

  function filterMovies(movies, query, isShortFilm) {
    return movies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase()
      return (
        (nameRU.includes(query) && !isShortFilm) ||
        (nameRU.includes(query) && isShortFilm && movie.duration < 40)
      )
    })
  }

  function handleToggleChange(isToggled) {
    if (
      moviesDisplayState === "results-found" ||
      moviesDisplayState === "nothing-found"
    ) {
      const localMovies = JSON.parse(localStorage.getItem("movies"))
      const filteredMovies = filterMovies(localMovies, query, isToggled)
      setDisplayedMoviesIndex(0)
      setLoadMore(false)
      setMovies(filteredMovies)
      setIsShortFilm(isToggled)
      localStorage.setItem("isShortFilm", JSON.stringify(isToggled))

      if (filteredMovies.length > 0) {
        setMovies(filteredMovies)
        setMoviesDisplayState("results-found")
      } else {
        setMoviesDisplayState("nothing-found")
      }
    }
  }

  function renderMovies() {
    const x = movies.length - increment
    setDisplayedMovies(movies.slice(0, x > 0 ? increment : movies.length))
    if (movies.length > increment) {
      setDisplayedMoviesIndex(increment)
      setLoadMore(true)
    }
  }

  function handleSubmitQuery(query, isShortFilm) {
    console.log("handleSubmitQuery ", query)
    console.log("handleSubmitQuery ", isShortFilm)
    setMoviesDisplayState("loading")
    setQuery(query)
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

  function getSavedMovies() {
    mainAPI
      .getSavedMovies()
      .then((movies) => {
        console.log("фильмы из нашей базы: ", movies)
        setSavedMovies(movies)
      })
      .catch((err) => {
        console.log(err)
      })
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
          console.log("movie saved: ", res)
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

  ///////////////////
  console.log(savedMovies)
  ///////////////////

  return (
    <div className="movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <main className="movies__container">
        <h1 className="movies-hidden-header">Фильмы</h1>
        <MoviesSearch
          query={query}
          isShortFilm={isShortFilm}
          onToggleChange={handleToggleChange}
          onSubmit={handleSubmitQuery}
        />
        {moviesDisplayState === "loading" ? (
          <Preloader visible="true" />
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
