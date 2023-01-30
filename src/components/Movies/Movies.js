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
  const [rawMovies, setRawMovies] = useState(null)
  const [loadingState, setLoadingState] = useState("unloaded")

  // useEffect(() => {

  // if
  //   localStorage.getItem(query) &&
  //   localStorage.getItem(isShortFilm) &&
  //   localStorage.getItem(filteredMovies) &&
  //   })

  function handleSubmitQuery(query, isShortFilm) {
    const queryLowerCase = query.toLowerCase()
    moviesAPI
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.filter((movie) => {
          const nameRU = movie.nameRU.toLowerCase()
          // const nameEN = movie.nameEN.toLowerCase()
          return (
            (nameRU.includes(queryLowerCase) && !isShortFilm) ||
            (nameRU.includes(queryLowerCase) &&
              isShortFilm &&
              movie.duration < 40)
          )
        })
        setRawMovies(filteredMovies)
        setLoadingState("loaded")
        localStorage.setItem("query", JSON.stringify(queryLowerCase))
        localStorage.setItem("isShortFilm", JSON.stringify(isShortFilm))
        localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies))
      })
      .catch((err) => {
        setLoadingState("failed")
        console.log(err)
      })

    // setRawMovies(JSON.parse(localStorage.getItem("beatsMovies")))
    // setLoadingState("loaded")
  }

  // if (loadingState === "loading") return <Preloader visible={true} />

  return (
    <div className="movies">
      <Header navigation={<NavMoviesAccount />} bgcolor="#202020" />
      <main>
        <h1 className="movies-hidden-header">Фильмы</h1>
        <MoviesSearch onSubmit={handleSubmitQuery} />
        {loadingState === "loaded" ? (
          <>
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
          </>
        ) : (
          <h1 style={{ color: "red", textAlign: "center" }}>
            Не удалось загрузить фильмы :(
          </h1>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Movies
