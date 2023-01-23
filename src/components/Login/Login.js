import { Link } from "react-router-dom"
import LogoLink from "../LogoLink/LogoLink"
import SubmitButton from "../SubmitButton/SubmitButton"
import "./Login.css"

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <LogoLink />
        <h2 className="login__heading">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__form-label" htmlFor="email-input">
            E-mail
          </label>
          <input className="login__form-input" id="email-input"></input>
          <div className="login__form-input-password_validation-message">
            Ошибка валидации
          </div>
          <label className="login__form-label" htmlFor="password-input">
            Пароль
          </label>
          <input
            className="login__form-input login__form-input-password_error"
            type="password"
            id="password-input"
          ></input>
          <div className="login__form-input-password_validation-message">
            Ошибка валидации
          </div>
          <div className="login__form-submit-button">
            <SubmitButton
              title="Войти"
              onSubmit={null}
              errorMessage="При обновлении профиля произошла ошибка."
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
