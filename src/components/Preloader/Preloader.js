import "./Preloader.css"

const Preloader = () => {
  return (
    <div className="preloader">
      {/*add class "preloader_visible" later */}
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
}

export default Preloader
