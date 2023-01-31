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

function Movies() {
  const [movies, setMovies] = useState([])
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [displayedMoviesIndex, setDisplayedMoviesIndex] = useState({ count: 0 })
  const [loadMore, setLoadMore] = useState(false)
  const [query, setQuery] = useState("")
  const [isShortFilm, setIsShortFilm] = useState(false)

  const [moviesDisplayState, setMoviesDisplayState] = useState("unloaded")
  const [clientWidth, clientHeight] = useWindowSize()

  useEffect(() => {
    const localQuery = JSON.parse(localStorage.getItem("query"))
    const localIsShortFilm = JSON.parse(localStorage.getItem("isShortFilm"))
    const localFilteredMovies = JSON.parse(
      localStorage.getItem("filteredMovies")
    )

    if (
      localQuery !== null &&
      localIsShortFilm !== null &&
      localFilteredMovies !== null
    ) {
      setQuery(localQuery)
      setIsShortFilm(localIsShortFilm)
      setMovies(localFilteredMovies)
      setMoviesDisplayState("results-found")
    }
  }, [])

  useEffect(() => {
    setDisplayedMoviesIndex({ count: 0 })
    renderMovies(movies)
  }, [movies])

  useEffect(() => {
    console.log("Index on resize ", displayedMoviesIndex.count)
    setDisplayedMoviesIndex({ count: 0 })
    handleToggleChange(isShortFilm)
  }, [clientWidth])

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
    if (moviesDisplayState !== "unloaded") {
      const filteredMovies = filterMovies(movies, query, isToggled)
      setDisplayedMoviesIndex({ count: 0 })
      setMovies(filteredMovies)
      filteredMovies.length > 0
        ? setMoviesDisplayState("results-found")
        : setMoviesDisplayState("nothing-found")
    }
  }

  function renderMovies(movies) {
    let increment = 0
    if (clientWidth > 980) {
      increment = 3
    } else if (clientWidth > 470) {
      increment = 2
    } else increment = 1

    setDisplayedMovies(movies.slice(0, displayedMoviesIndex.count + increment))

    if (displayedMoviesIndex.count + increment >= movies.length) {
      setDisplayedMoviesIndex({ count: 0 })
      setLoadMore(false)
    } else {
      setDisplayedMoviesIndex({ count: displayedMoviesIndex.count + increment })
      setLoadMore(true)
    }
  }

  function handleSubmitQuery(query, isShortFilm) {
    setMoviesDisplayState("loading")
    setQuery(query)

    moviesAPI
      .getMovies()
      .then((movies) => {
        const filteredMovies = filterMovies(movies, query, isShortFilm)

        if (filteredMovies.length > 0) {
          setMovies(filteredMovies)
          setMoviesDisplayState("results-found")
          setDisplayedMoviesIndex({ count: 0 })
          localStorage.setItem("query", JSON.stringify(query))
          localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm))
          localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies))
        } else {
          setMoviesDisplayState("nothing-found")
        }
      })
      .catch((err) => {
        setMoviesDisplayState("failed-to-fetch")
        console.log(err)
      })
  }

  function handleLoadMore() {
    renderMovies(movies)
  }

  // if (loadingState === "loading") return <Preloader visible={true} />

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
                        ? `https://api.nomoreparties.co/${movie.image.url}`
                        : require("../../images/poster_ref.png")
                    }
                    trailerLink={movie.trailerLink}
                    savedState="save"
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
          <h2 style={{ color: "red", textAlign: "center" }}>
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
