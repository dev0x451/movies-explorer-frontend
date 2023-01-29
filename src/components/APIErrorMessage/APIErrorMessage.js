import "./APIErrorMessage.css"

function APIErrorMessage({ message }) {
  return (
    <div
      className={
        message ? "apierrormessage apierrormessage_visible" : "apierrormessage"
      }
    >
      {message || "ошибка"}
    </div>
  )
}

export default APIErrorMessage
