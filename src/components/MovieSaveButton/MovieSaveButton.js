import "./MovieSaveButton.css"

function MovieSaveButton({ savedState }) {
  const cssClass =
    savedState === "saved"
      ? "movie-save-button movie-save-button_saved"
      : savedState === "remove"
      ? "movie-save-button movie-save-button_remove"
      : "movie-save-button "

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
