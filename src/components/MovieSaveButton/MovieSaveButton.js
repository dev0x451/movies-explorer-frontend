import "./MovieSaveButton.css"

function MovieSaveButton({ savedState, onClick }) {
  let cssClass = "movie-save-button button-hover-effect "
  cssClass +=
    savedState === "saved"
      ? " movie-save-button_saved"
      : savedState === "remove"
      ? "movie-save-button_remove"
      : ""

  return (
    <div onClick={onClick} className={cssClass}>
      {savedState === "saved" ? (
        <div className="movie-save-button__saved-icon"></div>
      ) : savedState === "remove" ? (
        <div className="movie-save-button__remove-icon"></div>
      ) : (
        "Сохранить"
      )}
    </div>
  )
}

export default MovieSaveButton
