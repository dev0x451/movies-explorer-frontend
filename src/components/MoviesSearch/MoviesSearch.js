import "./MoviesSearch.css"
import { useState } from "react"
function MoviesSearch({ onSubmit }) {
  const [shortFilm, setShortFilm] = useState(false)
  const [query, setQuery] = useState(null)

  function onToggleClick() {
    setShortFilm(!shortFilm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(query, shortFilm)
  }

  function handleChangeQuery(e) {
    setQuery(e.target.value)
  }

  return (
    <>
      <section className="movies-search">
        <form className="movies-search__form">
          <input
            className="movies-search__form-input"
            type="text"
            minLength="2"
            required
            placeholder="Фильм"
            onChange={handleChangeQuery}
          />
          <button
            className="movies-search__form-submitbtn button-hover-effect"
            onClick={handleSubmit}
            type="submit"
          />
        </form>
        <div className="movies-search__toggle-switch">
          <div
            onClick={onToggleClick}
            className={
              shortFilm
                ? "movies-search__toggle-switch-on button-hover-effect"
                : "movies-search__toggle-switch-off button-hover-effect"
            }
          ></div>
          <div className="movies-search__toggle-switch-text">
            Короткометражки
          </div>
        </div>
      </section>
    </>
  )
}

export default MoviesSearch
