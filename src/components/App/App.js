import { Route, Switch } from "react-router-dom"

import Main from "../Main/Main"
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
      </Switch>
      <Main />
    </>
  )
}

export default App
