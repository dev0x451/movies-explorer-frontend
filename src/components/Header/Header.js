import "./Header.css"
import logo from "../../images/logo.svg"

function Header({ navigation, bgcolor }) {
  return (
    <header className="header-container" style={{ backgroundColor: bgcolor }}>
      <img className="header__logo" src={logo} alt="" />
      <nav>{navigation}</nav>
    </header>
  )
}

export default Header
