import "./Profile.css"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import React from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import APIErrorMessage from "../APIErrorMessage/APIErrorMessage"
function Profile({ onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <div className="profile">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <h1 className="profile__heading">{`Привет, ${currentUser.name}!`}</h1>
      <div className="profile__info-container">
        <div className="profile__info-line profile__info-line_underlined">
          <span>Имя</span>
          <span>{currentUser.name}</span>
        </div>
        <div className="profile__info-line">
          <span>E-mail</span>
          <span>{currentUser.email}</span>
        </div>
      </div>
      <Link className="profile__edit-link link-hover-effect" to="/editprofile">
        Редактировать
      </Link>
      <button
        className="profile__logout-link link-hover-effect"
        onClick={onSignOut}
      >
        Выйти из аккаунта
      </button>
    </div>
  )
}

export default Profile
