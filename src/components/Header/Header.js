import "./Header.css"
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Header({ navigation, bgcolor }) {
  return (
    <header className="header-container" style={{ backgroundColor: bgcolor }}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <nav>{navigation}</nav>
    </header>
  )
}

export default Header
