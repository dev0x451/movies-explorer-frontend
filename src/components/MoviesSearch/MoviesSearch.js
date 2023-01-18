import "./MoviesSearch.css"

function MoviesSearch() {
  return (
    <>
      <section className="movies-search">
        <div className="movies-search__form-container">
          <form className="movies-search__form">
            <input className="movies-search__form-input" placeholder="Фильм" />
            <button className="movies-search__form-submitbtn" type="submit" />
          </form>
          <div className="movies-search__toggle-switch-container">
            <div className="movies-search__toggle-switch-icon"></div>
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
