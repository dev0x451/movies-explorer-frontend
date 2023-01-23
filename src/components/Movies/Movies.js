import "./Movies.css"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
function Movies() {
  return (
    <div className="movies">
      <Preloader />
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <MoviesSearch />
      <MoviesCardList>
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="saved"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="saved"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        {/* <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        /> */}
        {/* <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          savedState="save"
        /> */}
      </MoviesCardList>
      <button className="movies__loadmore-btn">Еще</button>
      <Footer />
    </div>
  )
}

export default Movies
