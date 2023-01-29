import React from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import { Route, Redirect } from "react-router-dom"

function ProtectedRoute({ component: Component, ...props }) {
  const currentUser = React.useContext(CurrentUserContext)

  console.log("cur: ", props.isLoggedIn)

  return (
    <Route>
      {() => {
        return props.isLoggedIn === "auth" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }}
    </Route>
  )
}

export default ProtectedRoute
