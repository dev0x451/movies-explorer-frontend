import "./Portfolio.css"
import PortfolioLink from "../PortfolioLink/PortfolioLink"

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <PortfolioLink title="Статичный сайт" link="https://github.com" />
        <PortfolioLink title="Адаптивный сайт" link="https://github.com" />
        <PortfolioLink
          title="Одностраничное приложение"
          link="https://github.com"
        />
      </div>
    </section>
  )
}

export default Portfolio
