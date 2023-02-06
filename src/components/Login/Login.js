import { Link } from "react-router-dom"
import LogoLink from "../LogoLink/LogoLink"
import FormInput from "../FormInput/FormInput"
import SubmitButton from "../SubmitButton/SubmitButton"
import { useFormWithValidation } from "../../hooks/validate"
import APIResponseMessage from "../APIErrorMessage/APIResponseMessage"

import "./Login.css"

function Login({ onSubmit, apiErrorCode }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation()

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(values["email-input"], values["password-input"])
  }

  return (
    <div className="login">
      <APIResponseMessage apiErrorCode={apiErrorCode} />
      <div className="login__container">
        <LogoLink />
        <h1 className="login__heading">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-input">
            <FormInput
              label="E-mail"
              type="email"
              id="email-input"
              value={values["email-input"]}
              validationMessage={errors["email-input"]}
              onChange={handleChange}
            />
            <FormInput
              label="Пароль"
              type="password"
              id="password-input"
              value={values["password-input"]}
              validationMessage={errors["password-input"]}
              onChange={handleChange}
            />
          </div>

          <div className="login__form-submit-button">
            <SubmitButton
              title="Войти"
              isActive={isValid}
              apiErrorCode={apiErrorCode}
            />
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
