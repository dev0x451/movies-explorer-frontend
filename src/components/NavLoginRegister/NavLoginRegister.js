import "./NavLoginRegister.css"
import { Link } from "react-router-dom"

function NavLoginRegister() {
  return (
    <nav className="nav-login-register">
      <Link
        className="nav-login-register__reg-button link-hover-effect"
        to="/signup"
      >
        Регистрация
      </Link>
      <Link
        className="nav-login-register__login-button link-hover-effect"
        to="/signin"
      >
        Войти
      </Link>
    </nav>
  )
}

export default NavLoginRegister
