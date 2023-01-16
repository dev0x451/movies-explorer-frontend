import HeadLine from "../HeadLine/HeadLine"
import TechBox from "../TechBox/TechBox"
import "./Techs.css"

function Techs() {
  return (
    <section className="techs">
      <HeadLine text="Технологии" />
      <div className="techs__container">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__stack">
          <li>
            <TechBox title="HTML" />
          </li>
          <li>
            <TechBox title="CSS" />
          </li>
          <li>
            <TechBox title="JS" />
          </li>
          <li>
            <TechBox title="React" />
          </li>
          <li>
            <TechBox title="Git" />
          </li>
          <li>
            <TechBox title="Express.js" />
          </li>
          <li>
            <TechBox title="mongoDB" />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Techs
