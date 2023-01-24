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
        <div className="movies-search__form-container">
          <form className="movies-search__form">
            <input className="movies-search__form-input" placeholder="Фильм" />
            <button
              className="movies-search__form-submitbtn button-hover-effect"
              type="submit"
            />
          </form>
          <div className="movies-search__toggle-switch-container">
            <div
              onClick={onToggleClick}
              className={
                shortFilm
                  ? "movies-search__toggle-switch_on button-hover-effect"
                  : "movies-search__toggle-switch_off button-hover-effect"
              }
            ></div>
            <div className="movies-search__toggle-switch-text">
              Короткометражки
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MoviesSearch
