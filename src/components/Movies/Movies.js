import "./Movies.css"
import Header from "../Header/Header"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import MoviesSearch from "../MoviesSearch/MoviesSearch"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import MoviesCard from "../MoviesCard/MoviesCard"
import Footer from "../Footer/Footer"
import Preloader from "../Preloader/Preloader"
import { useState, useEffect } from "react"
import { moviesAPI } from "../../utils/MoviesApi"

function Movies() {
  const [rawMovies, setRawMovies] = useState([])

  useEffect(() => {
    moviesAPI
      .getMovies()
      .then((movies) => {
        console.log(movies)
        setRawMovies(movies)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="movies">
      <Preloader visible={false} />
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <main>
        <h1 className="movies-hidden-header">Фильмы</h1>
        <MoviesSearch />
        <MoviesCardList>
          {rawMovies.map((movie, index) => {
            return (
              <MoviesCard
                key={movie.id.toString() || index}
                title={movie.nameRU}
                duration={movie.duration}
                poster={
                  movie?.image?.url
                    ? `https://api.nomoreparties.co/${movie.image.url}`
                    : require("../../images/poster_ref.png")
                }
                trailerLink={movie.trailerLink}
                savedState="save"
              />
            )
          })}
        </MoviesCardList>
        <button className="movies__loadmore-btn">Еще</button>
      </main>
      <Footer />
    </div>
  )
}

export default Movies
