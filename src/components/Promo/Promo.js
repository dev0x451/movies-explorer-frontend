import "./Promo.css"
import webLogo from "../../images/WEB_landing-logo.svg"
import { Link } from "react-router-dom"

function Promo() {
  return (
    <div className="promo">
      <div className="promo__container">
        <div className="promo__text-content">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link to="#about" className="promo__learn-more-button">
            Узнать больше
          </Link>
        </div>

        <img className="promo__logo" src={webLogo} alt="" />
      </div>
    </div>
  )
}
export default Promo
