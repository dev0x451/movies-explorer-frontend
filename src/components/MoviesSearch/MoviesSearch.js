import "./MoviesSearch.css"
import { useState, useEffect } from "react"
function MoviesSearch({
  query,
  isShortFilm,
  setQuery,
  setIsShortFilm,
  onSubmit,
}) {
  const [localIsShortFilm, setLocalIsShortFilm] = useState(isShortFilm)
  const [localQuery, setLocalQuery] = useState(query)

  useEffect(() => {
    setLocalIsShortFilm(isShortFilm)
  }, [isShortFilm])

  useEffect(() => {
    setIsShortFilm(localIsShortFilm)
  }, [localIsShortFilm])

  useEffect(() => {
    setLocalQuery(query)
  }, [query])

  useEffect(() => {
    setQuery(localQuery)
  }, [localQuery])

  function onToggleClick() {
    setLocalIsShortFilm(!localIsShortFilm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit()
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
            localIsShortFilm
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
