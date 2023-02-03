import APIResponseMessage from "../APIErrorMessage/APIResponseMessage"
import "./SubmitButton.css"

function SubmitButton({ title, isActive, onSubmit, apiErrorCode }) {
  return (
    <>
      <APIResponseMessage apiErrorCode={apiErrorCode} />
      <button
        type="submit"
        onClick={onSubmit}
        className={
          isActive
            ? "submit-button  button-hover-effect"
            : "submit-button submit-button-disabled"
        }
        disabled={!isActive}
      >
        {title}
      </button>
    </>
  )
}

export default SubmitButton
