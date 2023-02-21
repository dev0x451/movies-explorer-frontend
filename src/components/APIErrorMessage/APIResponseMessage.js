import "./APIResponseMessage.css"
import { STATUS_CODES } from "../../utils/constants"
import { useState } from "react"

function APIResponseMessage({ apiErrorCode }) {
  const [visible, setVisible] = useState(false)

  return (
    <>
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
      <div className={
        apiErrorCode
          ? "apiresponsemessage-close-icon apiresponsemessage-close-icon_visible"
          : "apiresponsemessage-close-icon"
      }
        onClick={() => { setVisible(false)} }

        ></div>
      </>
  )
}

export default APIResponseMessage
