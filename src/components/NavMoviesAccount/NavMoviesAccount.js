import "./NavMoviesAccount.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function NavMoviesAccount({ url }) {
  const [isOpen, setIsOpen] = useState(false)

  function onCloseButton(e) {
    setIsOpen(false)
  }

  function onMenuClick(e) {
    setIsOpen(false)
  }

  function onBurgerButton(e) {
    setIsOpen(true)
  }
  return (
    <div className="nav-movies-account">
      <nav className="nav-movies-account-desktop">
        <div>
          <Link
            className="nav-movies-account__link nav-movies-account__link_active"
            to="/movies"
          >
            Фильмы
          </Link>
          <Link className="nav-movies-account__link" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </div>
        <Link className="nav-movies-account__account-container" to="/profile">
          <div className="nav-movies-account__account-text">Аккаунт</div>
          <div className="nav-movies-account__account-icon-container">
            <div className="nav-movies-account__account-icon"></div>
          </div>
        </Link>
      </nav>

      <div
        onClick={onBurgerButton}
        className={
          isOpen
            ? "nav-movies-account-mobile nav-movies-account-mobile_visible"
            : "nav-movies-account-mobile"
        }
      ></div>

      <div className="nav-movies-account-mobile__close-buttion-container">
        <nav
          className={
            isOpen
              ? "nav-movies-account-mobile__contatiner nav-movies-account-mobile__contatiner_visible"
              : "nav-movies-account-mobile__contatiner"
          }
        >
          <div className="nav-movies-account-mobile__links">
            <Link
              onClick={onMenuClick}
              className="nav-movies-account__link nav-movies-account__link_mobile"
              to="/"
            >
              Главная
            </Link>
            <Link
              onClick={onMenuClick}
              className={
                url === "movies"
                  ? "nav-movies-account__link nav-movies-account__link_mobile nav-movies-account__link_active-mobile"
                  : "nav-movies-account__link nav-movies-account__link_mobile"
              }
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              onClick={onMenuClick}
              className={
                url === "saved-movies"
                  ? "nav-movies-account__link nav-movies-account__link_mobile nav-movies-account__link_active-mobile"
                  : "nav-movies-account__link nav-movies-account__link_mobile"
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </Link>
          </div>
          <Link className="nav-movies-account__account-container" to="/profile">
            <div className="nav-movies-account__account-text">Аккаунт</div>
            <div className="nav-movies-account__account-icon-container">
              <div className="nav-movies-account__account-icon"></div>
            </div>
          </Link>
          <div
            onClick={onCloseButton}
            className="nav-movies-account__close-button"
          ></div>
        </nav>
      </div>
    </div>
  )
}

export default NavMoviesAccount
