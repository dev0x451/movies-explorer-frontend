import "./NotFoundPage.css"
import { useHistory } from "react-router-dom"
function NotFoundPage() {
  let history = useHistory()
  return (
    <div className="notfoundpage">
      <h2 className="notfoundpage__heading">404</h2>
      <p className="notfoundpage__subtitle">Страница не найдена</p>
      <button
        className="notfoundpage__backbutton"
        onClick={() => history.goBack()}
      >
        Назад
      </button>
    </div>
  )
}

export default NotFoundPage
