import "./APIResponseMessage.css"
import { STATUS_CODES } from "../../utils/statusCodes"

function APIResponseMessage({ apiErrorCode }) {
  return (
    <div
      className={
        apiErrorCode
          ? "apiresponsemessage apiresponsemessage_visible"
          : "apiresponsemessage"
      }
    >
      {STATUS_CODES[apiErrorCode] || "Произошла ошибка"}
    </div>
  )
}

export default APIResponseMessage
