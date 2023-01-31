import { Link } from "react-router-dom"
import "./Register.css"
import LogoLink from "../LogoLink/LogoLink"
import SubmitButton from "../SubmitButton/SubmitButton"
import FormInput from "../FormInput/FormInput"
import { mainAPI } from "../../utils/MainApi"
import { useState } from "react"
import { ERRORS } from "../../utils/errors"

function Register({ onSubmit }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [apiErrorMessage, setApiErrorMessage] = useState("")

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(name, email, password)
  }

  return (
    <div className="register">
      <div className="register__container">
        <LogoLink />
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-input">
            <FormInput
              label="Имя"
              type="text"
              id="name-input"
              placeholder="Виталий"
              value={name}
              onChange={handleChangeName}
            />
            <FormInput
              label="E-mail"
              type="email"
              id="email-input"
              placeholder="pochta@yandex.ru"
              value={email}
              onChange={handleChangeEmail}
            />
            <FormInput
              label="Пароль"
              type="password"
              id="password-input"
              value={password}
              onChange={handleChangePassword}
            />
          </div>

          <div className="register__form-submit-button">
            <SubmitButton
              title="Зарегистрироваться"
              errorMessage={apiErrorMessage}
            />
          </div>
        </form>
        <div className="register__bottom-text-container">
          <span className="register__bottom-text-question">
            Уже зарегистрированы?
          </span>
          <Link
            className="register__bottom-text-link link-hover-effect"
            to="/signin"
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
