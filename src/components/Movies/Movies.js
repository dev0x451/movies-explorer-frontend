import "./Movies.css"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
function Movies() {
  return (
    <main className="movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
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
      <section className="movies"></section>
    </main>
  )
}

export default Movies
