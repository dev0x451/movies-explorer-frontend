import "./SavedMovies.css"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
function SavedMovies({ url }) {
  return (
    <div className="saved-movies">
      <Preloader />

      <Header navigation={<NavMoviesAccount url={url} />} bgcolor="#202020" />
      <main>
        <h1 className="movies-hidden-header">Сохраненные фильмы</h1>

        <MoviesSearch />
        <MoviesCardList>
          <MoviesCard
            title="В погоне за Бенкси"
            duration="27"
            poster={require("../../images/poster_ref.png")}
            savedState="remove"
          />
          <MoviesCard
            title="В погоне за Бенкси"
            duration="27"
            poster={require("../../images/poster_ref.png")}
            savedState="remove"
          />
          {/* <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="remove"
        /> */}
        </MoviesCardList>
        <div className="saved-movies__spacer"></div>
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies
