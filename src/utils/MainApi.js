class MainAPI {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else return Promise.reject(res.status)
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then(this._checkResponse)
  }

  signup(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    }).then(this._checkResponse)
  }

  signout() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse)
  }

  checkToken() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then(this._checkResponse)
  }
}

export const mainAPI = new MainAPI({
  url: "https://api.movies001.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
})

///////////////////////////////////////

// export const auth = new Auth({
//   url: 'https://localhost:4000',
//   headers: {
//     'Content-Type': 'application/json',
//   }
// });

////////////////////////////////////
