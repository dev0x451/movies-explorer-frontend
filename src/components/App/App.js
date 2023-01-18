import { Route, Switch } from "react-router-dom"

import Main from "../Main/Main"
import Movies from "../Movies/Movies"
import SavedMovies from "../SavedMovies/SavedMovies"
import Login from "../Login/Login"
import Register from "../Register/Register"

import "./App.css"

function App() {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/savedmovies">
          <SavedMovies />
        </Route>
      </Switch>
    </>
  )
}

export default App
