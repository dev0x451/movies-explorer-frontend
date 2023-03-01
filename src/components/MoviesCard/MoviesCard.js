import { useState, useEffect } from "react"
import "./MoviesCard.css"
import MovieSaveButton from "../MovieSaveButton/MovieSaveButton"

function MoviesCard({
  title,
  movieID,
  duration,
  poster,
  trailerLink,
  savedState,
  onCardClick,
}) {

  function handleClick() {
    onCardClick(movieID, savedState)
  }

  return (
    <div className="movies-card">
      <div className="movies-card__text-container">
        <div className="movies-card__title">{title}</div>
        <p className="movies-card__title_full">{title}</p>
        <span className="movies-card__duration">{`${duration} минут`}</span>
      </div>
      <a
        className="movies-card__poster-container"
        href={trailerLink}
        target="_blank" rel="noreferrer"
      >
        <img className="movies-card__poster" src={poster} alt="постер фильма" />
      </a>
      <div className="movie-save-button-container">
        <MovieSaveButton savedState={savedState} onClick={handleClick} />
      </div>
    </div>
  )
}

export default MoviesCard
