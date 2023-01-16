/* eslint-disable react/jsx-no-target-blank */
import "./PortfolioLink.css"

function PortfolioLink({ title, link }) {
  return (
    <div className="portfoliolink">
      <div className="portfoliolink__text">{title}</div>
      <a className="portfoliolink__link" href={link} target="_blank">
        ↗
      </a>
    </div>
  )
}

export default PortfolioLink
