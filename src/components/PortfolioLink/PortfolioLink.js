/* eslint-disable react/jsx-no-target-blank */
import "./PortfolioLink.css"

function PortfolioLink({ title, link }) {
  return (
    <li className="portfoliolink">
      <a
        className="portfoliolink__link link-hover-effect"
        href={link}
        target="_blank"
      >
        <span className="portfoliolink__text">{title}</span>
        <span className="portfoliolink__icon">↗</span>
      </a>
    </li>
  )
}

export default PortfolioLink
