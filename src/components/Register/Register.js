import { Link } from "react-router-dom"
import "./Register.css"
import logo from "../../images/logo.svg"

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="" />
        </Link>
        <h2 className="register__heading">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__form-label" htmlFor="name-input">
            Имя
          </label>
          <input className="register__form-input" id="name-input"></input>
          <label className="register__form-label" htmlFor="email-input">
            E-mail
          </label>
          <input className="register__form-input" id="email-input"></input>
          <label className="register__form-label" htmlFor="password-input">
            Пароль
          </label>
          <input
            className="register__form-input register__form-input-password_error"
            type="password"
            id="password-input"
          ></input>
          <div className="register__form-input-password_validation-message">
            Что-то пошло не так...
          </div>
          <button className="register__form-submit-button">
            Зарегистрироваться
          </button>
        </form>

        <div className="register__bottom-text-container">
          <span className="register__bottom-text-question">
            Уже зарегистрированы?
          </span>
          <Link className="register__bottom-text-link" to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
