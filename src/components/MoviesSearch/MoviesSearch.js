import "./MoviesSearch.css"
import { useState, useEffect } from "react"
function MoviesSearch({ query, isShortFilm, onToggleChange, onSubmit }) {
  const [shortFilmToggle, setShortFilmToggle] = useState(false)
  const [localQuery, setLocalQuery] = useState("")

  useEffect(() => {
    setShortFilmToggle(isShortFilm)
  }, [isShortFilm])

  useEffect(() => {
    setLocalQuery(query)
  }, [query])

  function onToggleClick() {
    setShortFilmToggle(!shortFilmToggle)
    onToggleChange(!shortFilmToggle)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(localQuery, shortFilmToggle)
  }

  function handleChangeQuery(e) {
    setLocalQuery(e.target.value.toLowerCase())
  }

  return (
    <section className="movies-search">
      <form className="movies-search__form" onSubmit={handleSubmit}>
        <input
          className="movies-search__form-input"
          id="movie-search-input"
          name="movie-search-input"
          type="text"
          minLength="2"
          required
          placeholder="Фильм"
          value={localQuery}
          onChange={handleChangeQuery}
        />
        <button
          className="movies-search__form-submitbtn button-hover-effect"
          type="submit"
        />
      </form>
      <div className="movies-search__toggle-switch">
        <div
          onClick={onToggleClick}
          className={
            shortFilmToggle
              ? "movies-search__toggle-switch-on button-hover-effect"
              : "movies-search__toggle-switch-off button-hover-effect"
          }
        ></div>
        <div className="movies-search__toggle-switch-text">Короткометражки</div>
      </div>
    </section>
  )
}

export default MoviesSearch
