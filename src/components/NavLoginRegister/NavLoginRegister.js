import "./NavLoginRegister.css"
import { Link } from "react-router-dom"

function NavLoginRegister() {
  return (
    <nav className="nav-login-register">
      <Link className="nav-login-register__reg-button" to="/signup">
        Регистрация
      </Link>
      <Link className="nav-login-register__login-button" to="/signin">
        Войти
      </Link>
    </nav>
  )
}

export default NavLoginRegister
