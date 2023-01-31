import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import LogoLink from "../LogoLink/LogoLink"
import FormInput from "../FormInput/FormInput"
import SubmitButton from "../SubmitButton/SubmitButton"
import { mainAPI } from "../../utils/MainApi"
import { ERRORS } from "../../utils/errors"
import "./Login.css"

function Login({ onSubmit }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [apiErrorMessage, setApiErrorMessage] = useState("")

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <div className="login">
      <div className="login__container">
        <LogoLink />
        <h1 className="login__heading">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-input">
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

          <div className="login__form-submit-button">
            <SubmitButton title="Войти" errorMessage={apiErrorMessage} />
          </div>
        </form>

        <div className="login__bottom-text-container">
          <span className="login__bottom-text-question">
            Ещё не зарегистрированы?
          </span>
          <Link
            to="/signup"
            className="login__bottom-text-link  link-hover-effect"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
