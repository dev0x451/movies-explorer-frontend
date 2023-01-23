import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function LogoLink() {
  return (
    <Link className="link-hover-effect" to="/">
      <img className="logolink__logo" src={logo} alt="логотип" />
    </Link>
  )
}

export default LogoLink
