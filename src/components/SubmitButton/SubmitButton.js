import APIErrorMessage from "../APIErrorMessage/APIErrorMessage"
import "./SubmitButton.css"

function SubmitButton({ title, onSubmit, errorMessage }) {
  return (
    <>
      <APIErrorMessage message={errorMessage} />
      <button
        type="submit"
        onClick={onSubmit}
        className="submit-button button-hover-effect"
      >
        {title}
      </button>
    </>
  )
}

export default SubmitButton
