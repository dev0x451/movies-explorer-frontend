import "./MovieSaveButton.css"

function MovieSaveButton({ isSaved }) {
  return (
    <button
      className={
        isSaved
          ? "movie-save-button movie-save-button_saved"
          : "movie-save-button"
      }
    >
      {isSaved ? (
        <div className="movie-save-button__saved-icon"></div>
      ) : (
        "Сохранить"
      )}
    </button>
  )
}

export default MovieSaveButton
