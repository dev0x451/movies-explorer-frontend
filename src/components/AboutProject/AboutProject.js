import "./AboutProject.css"
import HeadLine from "../HeadLine/HeadLine"

function AboutProject() {
  return (
    <div className="aboutproject-wrapper">
      <section id="aboutproject" className="aboutproject">
        <HeadLine text="О проекте" />
        <div className="aboutproject__diploma">
          <div className="aboutproject__diploma-text">
            <h3 className="aboutproject__diploma-header">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="aboutproject__diploma-description">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности&nbsp;и&nbsp;финальные доработки.
            </p>
          </div>
          <div className="aboutproject__diploma-text">
            <h3 className="aboutproject__diploma-header">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="aboutproject__diploma-description">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать,&nbsp;чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="aboutproject__diploma-stages">
          <div className="aboutproject__diploma-stage aboutproject__diploma-stage_green">
            1 неделя
          </div>
          <div className="aboutproject__diploma-stage aboutproject__diploma-stage_gray">
            4 недели
          </div>
          <div className="aboutproject__diploma-stage aboutproject__diploma-stage_transparent">
            Back-end
          </div>
          <div className="aboutproject__diploma-stage aboutproject__diploma-stage_transparent">
            Front-end
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutProject
