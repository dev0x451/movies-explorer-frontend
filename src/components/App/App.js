import { Route, Switch, Redirect } from "react-router-dom"

import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import Login from "../Login/Login"
import Register from "../Register/Register"

import "./App.css"

function App() {
  return (
    <>
      <Switch>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/notfound">
          <NotFoundPage />
        </Route>
        <Route path="*">
          <Redirect to="/notfound" />
        </Route>
      </Switch>
    </>
  )
}

export default App
