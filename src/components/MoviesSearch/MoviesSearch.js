import "./MoviesSearch.css"
import { useState } from "react"
function MoviesSearch() {
  const [shortFilm, setShortFilm] = useState(false)
  function onToggleClick() {
    setShortFilm(!shortFilm)
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
