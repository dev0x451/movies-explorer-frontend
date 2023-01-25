import { Link } from "react-router-dom"
import "./Register.css"
import LogoLink from "../LogoLink/LogoLink"
import SubmitButton from "../SubmitButton/SubmitButton"
import FormInput from "../FormInput/FormInput"

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <LogoLink />
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className="register__form">
          <div className="register__form-input">
            <FormInput
              label="Имя"
              type="text"
              id="name-input"
              placeholder="Виталий"
            />
            <FormInput
              label="E-mail"
              type="email"
              id="email-input"
              placeholder="pochta@yandex.ru"
            />
            <FormInput label="Пароль" type="password" id="password-input" />
          </div>

          <div className="register__form-submit-button">
            <SubmitButton
              title="Зарегистрироваться"
              onSubmit={null}
              errorMessage="При обновлении профиля произошла ошибка."
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
