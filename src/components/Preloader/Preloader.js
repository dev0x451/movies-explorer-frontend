import "./Preloader.css"

const Preloader = ({ visible }) => {
  return (
    <div className={visible ? "preloader preloader_visible" : "preloader"}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
}

export default Preloader
