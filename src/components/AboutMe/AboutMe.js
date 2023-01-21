/* eslint-disable react/jsx-no-target-blank */
import "./AboutMe.css"
import userPic from "../../images/pic__COLOR_pic.png"
import HeadLine from "../HeadLine/HeadLine"
function AboutMe() {
  return (
    <section className="aboutme">
      <HeadLine text="Студент" />
      <div className="aboutme__contatiner">
        <div className="aboutme__text">
          <h2 className="aboutme__text-title">Виталий</h2>
          <p className="aboutme__text-subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__text-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com"
            className="aboutme__text-github"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" src={userPic} alt="" />
      </div>
    </section>
  )
}

export default AboutMe
