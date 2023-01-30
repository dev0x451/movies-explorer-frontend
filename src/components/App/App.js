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

import "./App.scss"
import Preloader from "../Preloader/Preloader"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)
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
        // setApiErrorMessage(ERRORS[err] || "Возникла ошибка")
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
        // setApiErrorMessage(ERRORS[err] || "Возникла ошибка")
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
      })
      .catch((err) => {
        // APIErrorMessage(err)
        console.log(err)
      })
  }

  if (isLoggedIn === null) return <Preloader visible={true} />

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            path="/profile"
            isLoggedIn={isLoggedIn}
            onSignOut={handleSignOut}
            component={Profile}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/movies"
            currentUser={currentUser}
            isLoggedIn={isLoggedIn}
            component={Movies}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            currentUser={currentUser}
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
          ></ProtectedRoute>
          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login onSubmit={handleSubmitSigninForm} />
            )}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register onSubmit={handleSubmitSignupForm} />
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
