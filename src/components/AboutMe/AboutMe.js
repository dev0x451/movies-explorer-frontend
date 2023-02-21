/* eslint-disable react/jsx-no-target-blank */
import "./AboutMe.css"
import userPic from "../../images/CV_Photo_SchapovAV.jpg"
import HeadLine  from "../HeadLine/HeadLine"
function AboutMe() {
  return (
    <div className="aboutme-wrapper">
      <section className="aboutme">
        <HeadLine text="Студент" />
        <div className="aboutme__contatiner">
          <div className="aboutme__text">
            <h2 className="aboutme__text-title">Аркадий</h2>
            <p className="aboutme__text-subtitle">Фронтенд-разработчик</p>
            <p className="aboutme__text-description">
              Я родился на Южном Урале, закончил факультет вычислительной техники МГТУ. До&nbsp;2021 года работал в компании
              «Boeing Russia» в сфере управления IT-инфраструктурой. После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы. Увлекаюсь
              бегом и лыжами. У
              меня скоро роидтся сын :)
            </p>
            <a
              href="https://github.com/dev0x451"
              className="aboutme__text-github link-hover-effect"
              target="_blank"
            >
              Github
            </a>
          </div>
          <img className="aboutme__photo" src={userPic} alt="фото человека" />
        </div>
      </section>
    </div>
  )
}

export default AboutMe
