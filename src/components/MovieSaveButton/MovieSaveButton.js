import "./MovieSaveButton.css"

function MovieSaveButton({ savedState }) {
  let cssClass = "movie-save-button button-hover-effect "
  cssClass +=
    savedState === "saved"
      ? " movie-save-button_saved"
      : savedState === "remove"
      ? "movie-save-button_remove"
      : ""

  return (
    <button className={cssClass}>
      {savedState === "saved" ? (
        <div className="movie-save-button__saved-icon"></div>
      ) : savedState === "remove" ? (
        <div className="movie-save-button__remove-icon"></div>
      ) : (
        "Сохранить"
      )}
    </button>
  )
}

export default MovieSaveButton
