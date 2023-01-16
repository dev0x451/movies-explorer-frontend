import "./Header.css"
import logo from "../../images/logo.svg"

function Header({ navigation }) {
  return (
    <header className="header-container">
      <img className="header__logo" src={logo} alt="" />
      <nav>{navigation}</nav>
    </header>
  )
}

export default Header
