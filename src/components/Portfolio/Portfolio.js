import "./Portfolio.css"
import PortfolioLink from "../PortfolioLink/PortfolioLink"

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <PortfolioLink title="Статичный сайт" link="https://github.com" />
          <PortfolioLink title="Адаптивный сайт" link="https://github.com" />
          <PortfolioLink
            title="Одностраничное приложение"
            link="https://github.com"
          />
        </ul>
      </section>
    </div>
  )
}

export default Portfolio
