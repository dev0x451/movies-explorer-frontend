import { useState, useEffect } from "react"
import { Route, Switch, Redirect, useHistory } from "react-router-dom"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import { mainAPI } from "../../utils/MainApi"

import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Profile from "../Profile/Profile"
import { SHORT_FILM_DURATION } from "../../utils/constants"

import "./App.scss"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const [movies, setMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [apiErrorCodeLogin, setApiErrorCodeLogin] = useState(null)
  const [apiErrorCodeRegister, setApiErrorCodeRegister] = useState(null)
  const [apiErrorCodeProfile, setApiErrorCodeProfile] = useState(null)

  const history = useHistory()

  useEffect(() => {
    mainAPI
      .checkToken()
      .then((res) => {
        setCurrentUser({
          id: res._id,
          name: res.name,
          email: res.email,
        })
        setIsLoggedIn(true)
      })
      .catch((err) => {
        setIsLoggedIn(false)
        console.log("ошибка проверки токена", err)
      })
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      getSavedMovies()
    }
  }, [isLoggedIn])

  function handleSubmitSigninForm(email, password) {
    mainAPI
      .login(email, password)
      .then(() => {
        mainAPI.checkToken().then((res) => {
          setCurrentUser({
            id: res._id,
            name: res.name,
            email: res.email,
          })
          setIsLoggedIn(true)

          history.push("/movies")
        })
      })
      .catch((err) => {
        setApiErrorCodeLogin(err)
        setTimeout(() => {
          setApiErrorCodeLogin(null)
        }, 2500)
      })
  }

  function handleSubmitSignupForm(name, email, password) {
    mainAPI
      .signup(name, email, password)
      .then(() => {
        mainAPI.login(email, password).then((res) => {
          mainAPI.checkToken().then((res) => {
            setCurrentUser({
              id: res._id,
              name: res.name,
              email: res.email,
            })
            setIsLoggedIn(true)

            history.push("/movies")
          })
        })
      })
      .catch((err) => {
        setApiErrorCodeRegister(err)
        setTimeout(() => {
          setApiErrorCodeRegister(null)
        }, 2500)
      })
  }

  function handleProfileUpdate(name, email) {
    mainAPI
      .updateUser(name, email)
      .then((res) => {
        setCurrentUser({ id: res._id, name: res.name, email: res.email })

        setApiErrorCodeProfile(200)
        setTimeout(() => {
          setApiErrorCodeProfile(null)
        }, 2500)
      })
      .catch((err) => {
        setApiErrorCodeProfile(err)
        setTimeout(() => {
          setApiErrorCodeProfile(null)
        }, 2500)
      })
  }

  function handleSignOut() {
    mainAPI
      .signout()
      .then((res) => {
        setCurrentUser({
          id: -1,
          name: "-",
          email: "-",
        })
        setIsLoggedIn(false)
        setMovies([])
        setSavedMovies([])
        localStorage.removeItem("query")
        localStorage.removeItem("isShortFilm")
        localStorage.removeItem("movies")
      })
      .catch((err) => {
        setApiErrorCodeProfile(err)
        setTimeout(() => {
          setApiErrorCodeProfile(null)
        }, 2500)
      })
  }

  function findMovieMatch(id) {
    return savedMovies.findIndex((movie) => movie.movieId === id)
  }

  function filterMovies(movies, query, isShortFilm) {
    return movies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase()
      return (
        (nameRU.includes(query) && !isShortFilm) ||
        (nameRU.includes(query) &&
          isShortFilm &&
          movie.duration < SHORT_FILM_DURATION)
      )
    })
  }

  function getSavedMovies() {
    mainAPI
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function saveMovie(movieID) {
    const index = movies.findIndex((movie) => movie.id === movieID)

    if (index !== -1) {
      mainAPI
        .saveMovie({
          country: movies[index].country,
          director: movies[index].director,
          duration: movies[index].duration,
          year: movies[index].year,
          description: movies[index].description,
          image: `https://api.nomoreparties.co${movies[index].image.url}`,
          trailerLink: movies[index].trailerLink,
          thumbnail: `https://api.nomoreparties.co${movies[index].image.formats.thumbnail.url}`,
          movieId: movies[index].id,
          nameRU: movies[index].nameRU,
          nameEN: movies[index].nameEN,
        })

        .then((movie) => {
          setSavedMovies([...savedMovies, movie])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  function deleteMovie(movieID) {
    const index = findMovieMatch(movieID)
    if (index !== -1) {
      mainAPI.deleteMovie(savedMovies[index]._id).then((res) => {
        const tmpArr = [...savedMovies]
        tmpArr.splice(index, 1)
        setSavedMovies(tmpArr)
      })
    } else console.log("нельзя удалить")
  }

  if (isLoggedIn === null) return <></>

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            onProfileEdit={handleProfileUpdate}
            apiErrorCode={apiErrorCodeProfile}
            onSignOut={handleSignOut}
            component={Profile}
          />
          <ProtectedRoute
            path="/movies"
            isLoggedIn={isLoggedIn}
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
            filterMovies={filterMovies}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            deleteMovie={deleteMovie}
            filterMovies={filterMovies}
            component={SavedMovies}
          />
          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login
                apiErrorCode={apiErrorCodeLogin}
                onSubmit={handleSubmitSigninForm}
              />
            )}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register
                apiErrorCode={apiErrorCodeRegister}
                onSubmit={handleSubmitSignupForm}
              />
            )}
          </Route>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/notfound">
            <NotFoundPage />
          </Route>
          <Route path="*">
            <Redirect to="/notfound" />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
