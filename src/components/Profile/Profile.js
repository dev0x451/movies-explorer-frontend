import "./Profile.css"
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
function Profile() {
  return (
    <div className="profile">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <h2 className="profile__heading">Привет, Виталий!</h2>
      <div className="profile__info-container">
        <div className="profile__info-line profile__info-line_underlined">
          <span>Имя</span>
          <span>Виталий</span>
        </div>
        <div className="profile__info-line">
          <span>E-mail</span>
          <span>pochta@yandex.ru</span>
        </div>
      </div>
      <Link className="profile__edit-link">Редактировать</Link>
      <Link className="profile__logout-link" to="/logout">
        Выйти из аккаунта
      </Link>
    </div>
  )
}

export default Profile
