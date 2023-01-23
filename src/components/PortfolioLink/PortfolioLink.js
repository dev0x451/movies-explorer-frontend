/* eslint-disable react/jsx-no-target-blank */
import "./PortfolioLink.css"

function PortfolioLink({ title, link }) {
  return (
    <div className="portfoliolink">
      <div className="portfoliolink__text">{title}</div>
      <a
        className="portfoliolink__link link-hover-effect"
        href={link}
        target="_blank"
      >
        ↗
      </a>
    </div>
  )
}

export default PortfolioLink
