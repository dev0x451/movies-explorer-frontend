import "./Profile.css"
import Header from "../Header/Header"
import APIResponseMessage from "../APIErrorMessage/APIResponseMessage"
import React from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import { useFormWithValidation } from "../../hooks/validate"
import { useEffect } from "react"

function Profile({ onProfileEdit, onSignOut, apiErrorCode }) {
  const currentUser = React.useContext(CurrentUserContext)
  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation()

  useEffect(() => {
    setValues({
      "profile-name-input": currentUser.name,
      "profile-email-input": currentUser.email,
    })
  }, [])

  function isProfileInfoDifferent() {
    return (
      values["profile-name-input"] !== currentUser.name ||
      values["profile-email-input"] !== currentUser.email
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    onProfileEdit(values["profile-name-input"], values["profile-email-input"])
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
            type="text"
            id="profile-name-input"
            name="profile-name-input"
            placeholder="Имя"
            required
            minLength="2"
            pattern="[a-zA-ZА-яёЁ\-\s]*"
            value={values["profile-name-input"] || ""}
            onChange={handleChange}
          />
          <div className="profile-input-validation-message">
            {errors["profile-name-input"]}
          </div>
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
            name="profile-email-input"
            placeholder="pochta@yandex.ru"
            required
            minLength="3"
            value={values["profile-email-input"] || ""}
            onChange={handleChange}
          />
          <div className="profile-input-validation-message">
            {errors["profile-email-input"]}
          </div>
        </div>

        <div className="profile__edit-error">
          <APIResponseMessage apiErrorCode={apiErrorCode} />
        </div>
        <button
          className="profile__edit-button link-hover-effect"
          disabled={!isProfileInfoDifferent() || !isValid}
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
