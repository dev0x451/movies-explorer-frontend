/* eslint-disable react/jsx-no-target-blank */
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__bottom-container">
        <div className="footer__copyright">© 2020</div>
        <div className="footer__links-container">
          <a
            className="footer__link"
            target="_blank"
            href="https://praktikum.yandex.ru"
          >
            Яндекс.Практикум
          </a>
          <a className="footer__link" target="_blank" href="https://github.com">
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
