import "./Movies.css"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
function Movies() {
  return (
    <div className="movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <MoviesSearch />
      <MoviesCardList>
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={false}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={false}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
        <MoviesCard
          title="В погоне за Бенкси"
          duration="27"
          poster={require("../../images/poster_ref.png")}
          isSaved={true}
        />
      </MoviesCardList>
      <button className="movies__loadmore-btn">Еще</button>
      <Footer />
    </div>
  )
}

export default Movies
