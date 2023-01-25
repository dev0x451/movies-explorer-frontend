import { Link } from "react-router-dom"
import LogoLink from "../LogoLink/LogoLink"
import FormInput from "../FormInput/FormInput"
import SubmitButton from "../SubmitButton/SubmitButton"
import "./Login.css"

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <LogoLink />
        <h1 className="login__heading">Рады видеть!</h1>
        <form className="login__form">
          <div className="login__form-input">
            <FormInput
              label="E-mail"
              type="email"
              id="email-input"
              placeholder="pochta@yandex.ru"
            />
            <FormInput label="Пароль" type="password" id="password-input" />
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
