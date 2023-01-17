import "./NavMoviesAccount.css"
import { Link } from "react-router-dom"

function NavMoviesAccount() {
  return (
    <nav className="nav-movies-account">
      <div>
        <Link
          className="nav-movies-account__films nav-movies-account__films_bold"
          to="/movies"
        >
          Фильмы
        </Link>
        <Link className="nav-movies-account__films" to="/movies">
          Сохраненные фильмы
        </Link>
      </div>
      <Link className="nav-movies-account__account-container" to="/">
        <div className="nav-movies-account__account-text">Аккаунт</div>
        <div className="nav-movies-account__account-icon-container">
          <div className="nav-movies-account__account-icon"></div>
        </div>
      </Link>
    </nav>
  )
}

export default NavMoviesAccount
