import "./APIResponseMessage.css"
import { STATUS_CODES } from "../../utils/constants"

function APIResponseMessage({ apiErrorCode }) {
  return (
    <div
      className={
        apiErrorCode
          ? "apiresponsemessage apiresponsemessage_visible"
          : "apiresponsemessage"
      }
    >
      <div className="apiresponsemessage-text">
        {STATUS_CODES[apiErrorCode] || "Произошла ошибка"}
      </div>
    </div>
  )
}

export default APIResponseMessage
