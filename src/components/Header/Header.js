import "./Header.css"
import LogoLink from "../LogoLink/LogoLink"

function Header({ children }) {
  return (
    <div className="header-wrapper">
      <header className="header-container">
        <LogoLink />
        {children}
      </header>
    </div>
  )
}

export default Header
