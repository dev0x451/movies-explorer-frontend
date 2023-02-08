class MoviesAPI {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else return Promise.reject(`Ошибка промиса: ${res.status}`)
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      headers: this._headers,
      method: "GET",
    }).then(this._checkResponse)
  }
}

export const moviesAPI = new MoviesAPI({
  url: "https://api.nomoreparties.co",
  headers: {},
})
