import "./Portfolio.css"
import PortfolioLink from "../PortfolioLink/PortfolioLink"

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <PortfolioLink title="Статичный сайт  <<Научиться учиться>>" link="https://how-to-learn-phi.vercel.app/" />
          <PortfolioLink title="Адаптивный сайт  <<Путешествия по России>>" link="https://russian-travel-bay.vercel.app/" />
          <PortfolioLink
            title="Одностраничное приложение <<проект Место>>"
            link="https://react-mesto-auth-omega.vercel.app/"
          />
        </ul>
      </section>
    </div>
  )
}

export default Portfolio
