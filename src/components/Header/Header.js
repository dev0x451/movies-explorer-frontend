import "./Header.css"
import LogoLink from "../LogoLink/LogoLink"

function Header({ navigation, bgcolor }) {
  return (
    <header className="header-container" style={{ backgroundColor: bgcolor }}>
      <LogoLink />
      <nav>{navigation}</nav>
    </header>
  )
}

export default Header
