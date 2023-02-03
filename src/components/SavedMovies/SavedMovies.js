import "./SavedMovies.css"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react"
function SavedMovies({
  savedMovies,
  getSavedMovies,
  deleteMovie,
  filterMovies,
}) {
  const [query, setQuery] = useState("")
  const [isShortFilm, setIsShortFilm] = useState(false)
  const [displayedMovies, setDisplayedMovies] = useState([])
  const [moviesDisplayState, setMoviesDisplayState] = useState("unloaded")

  useEffect(() => {
    getSavedMovies()
  }, [])

  useEffect(() => {
    renderResults()
  }, [isShortFilm])

  useEffect(() => {
    if (query === "") {
      renderResults()
    }
  }, [query])

  useEffect(() => {
    renderResults()
  }, [savedMovies])

  function renderResults() {
    const filteredMovies = filterMovies(savedMovies, query, isShortFilm)
    if (filteredMovies.length > 0) {
      setMoviesDisplayState("results-found")
      setDisplayedMovies(filteredMovies)
    } else {
      setMoviesDisplayState("nothing-found")
    }
  }

  function handleSubmitQuery() {
    renderResults()
  }

  function handleMovieCardClick(movieID) {
    deleteMovie(movieID)
    renderResults()
  }

  return (
    <div className="saved-movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <main className="movies__container">
        <h1 className="movies-hidden-header">Сохраненные фильмы</h1>
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
          <MoviesCardList>
            {displayedMovies.map((movie, index) => {
              return (
                <MoviesCard
                  key={movie.movieId.toString() || index}
                  movieID={movie.movieId.toString()}
                  title={movie.nameRU}
                  duration={movie.duration}
                  poster={
                    movie.image
                      ? movie.image
                      : require("../../images/poster_ref.png")
                  }
                  trailerLink={movie.trailerLink}
                  savedState="remove"
                  onCardClick={handleMovieCardClick}
                />
              )
            })}
          </MoviesCardList>
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

        <div className="saved-movies__spacer"></div>
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies
