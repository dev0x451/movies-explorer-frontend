import "./MoviesCardList.css"

function MoviesCardList({ children }) {
  return (
    <>
      <section className="movies-card-list">{children}</section>
    </>
  )
}

export default MoviesCardList
