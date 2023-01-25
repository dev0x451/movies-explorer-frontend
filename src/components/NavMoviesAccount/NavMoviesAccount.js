import "./NavMoviesAccount.css"
import { NavLink } from "react-router-dom"
import { useState } from "react"

function NavMoviesAccount() {
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
          <NavLink
            className="nav-movies-account__link link-hover-effect"
            activeClassName="nav-movies-account__link_active"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="nav-movies-account__link link-hover-effect"
            activeClassName="nav-movies-account__link_active"
            to="/saved-movies"
          >
            Сохраненные фильмы
          </NavLink>
        </div>
        <NavLink
          className="nav-movies-account__account-container nav-movies-account__link link-hover-effect"
          activeClassName="nav-movies-account__link_active"
          to="/profile"
        >
          <div>Аккаунт</div>
          <div className="nav-movies-account__account-icon-container">
            <div className="nav-movies-account__account-icon"></div>
          </div>
        </NavLink>
      </nav>

      <div
        onClick={onBurgerButton}
        className={
          isOpen
            ? "nav-movies-account-mobile  link-hover-effect  nav-movies-account-mobile_visible"
            : "nav-movies-account-mobile  link-hover-effect "
        }
      ></div>

      <div className="nav-movies-account-mobile-close-buttion-container">
        <nav
          className={
            isOpen
              ? "nav-movies-account-mobile-contatiner nav-movies-account-mobile-contatiner_visible"
              : "nav-movies-account-mobile-contatiner"
          }
        >
          <div className="nav-movies-account-mobile-links">
            <NavLink
              onClick={onMenuClick}
              className="nav-movies-account__link link-hover-effect nav-movies-account__link_mobile"
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              onClick={onMenuClick}
              className="nav-movies-account__link link-hover-effect nav-movies-account__link_mobile"
              activeClassName="nav-movies-account__link_active-mobile"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              onClick={onMenuClick}
              className="nav-movies-account__link link-hover-effect nav-movies-account__link_mobile"
              activeClassName="nav-movies-account__link_active-mobile"
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </div>
          <NavLink
            className="nav-movies-account__account-container  link-hover-effect "
            to="/profile"
          >
            <div className="nav-movies-account__link">Аккаунт</div>
            <div className="nav-movies-account__account-icon-container">
              <div className="nav-movies-account__account-icon"></div>
            </div>
          </NavLink>
          <div
            onClick={onCloseButton}
            className="nav-movies-account__close-button  link-hover-effect"
          ></div>
        </nav>
      </div>
    </div>
  )
}

export default NavMoviesAccount
