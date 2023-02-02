import "./SavedMovies.css"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import { useState, useEffect } from "react"
function SavedMovies({ savedMovies, setSavedMovies, deleteMovie }) {
  const [query, setQuery] = useState("")
  const [isShortFilm, setIsShortFilm] = useState(false)

  useEffect(() => {}, [])

  function handleToggleChange() {}

  function handleSubmitQuery() {}

  function handleMovieCardClick(movieID) {
    deleteMovie(movieID)
  }

  return (
    <div className="saved-movies">
      <Preloader />

      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <main>
        <h1 className="movies-hidden-header">Сохраненные фильмы</h1>
        <MoviesSearch
          query={query}
          isShortFilm={isShortFilm}
          onToggleChange={handleToggleChange}
          onSubmit={handleSubmitQuery}
        />

        <MoviesCardList>
          {savedMovies.map((movie, index) => {
            console.info(movie)
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
        <div className="saved-movies__spacer"></div>
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies
