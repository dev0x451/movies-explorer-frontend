import { Link } from "react-router-dom"
import "./Login.css"
import logo from "../../images/logo.svg"

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="" />
        </Link>
        <h2 className="login__heading">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__form-label" htmlFor="email-input">
            E-mail
          </label>
          <input className="login__form-input" id="email-input"></input>
          <label className="login__form-label" htmlFor="password-input">
            Пароль
          </label>
          <input
            className="login__form-input login__form-input-password_error"
            type="password"
            id="password-input"
          ></input>
          <div className="login__form-input-password_validation-message">
            Что-то пошло не так...
          </div>
          <button className="login__form-submit-button">Войти</button>
        </form>

        <div className="login__bottom-text-container">
          <span className="login__bottom-text-question">
            Ещё не зарегистрированы?
          </span>
          <Link to="/signup" className="login__bottom-text-link">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
