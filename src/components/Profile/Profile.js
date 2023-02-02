import "./Profile.css"
import Header from "../Header/Header"
import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import APIErrorMessage from "../APIErrorMessage/APIErrorMessage"
import { mainAPI } from "../../utils/MainApi"
function Profile({ onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext)

  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [apiErrorMessage, setApiErrorMessage] = useState("")

  function isProfileInfoDifferent() {
    return name !== currentUser.name || email !== currentUser.email
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    mainAPI
      .updateUser(name, email)
      .then(() => {
        // setCurrentUser(xxx)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="profile">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <h1 className="profile__heading">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__info-form" onSubmit={handleSubmit}>
        <div className="profile__info-line profile__info-line_underlined">
          <label className="profile__info-label" htmlFor="profile-name-input">
            Имя
          </label>
          <input
            className="profile__info-input"
            type="email"
            id="profile-name-input"
            name="profile-name-input"
            placeholder="pochta@yandex.ru"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="profile__info-line">
          <label className="profile__info-label" htmlFor="profile-email-input">
            E&#8209;mail
          </label>
          <input
            className="profile__info-input"
            label="E-mail"
            type="email"
            id="profile-email-input"
            placeholder="pochta@yandex.ru"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <button
          className="profile__edit-button link-hover-effect"
          disabled={!isProfileInfoDifferent()}
          type="submit"
        >
          Редактировать
        </button>
      </form>

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
