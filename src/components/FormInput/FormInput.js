import "./FormInput.css"

function FormInput({ label, type, id, validation }) {
  return (
    <div>
      <label className="forminput__label" htmlFor={id}>
        {label}
      </label>
      <input type={type} className="forminput" id={id}></input>
      <div className="register__form-input-password_validation-message">
        Что-то пошло не так...
      </div>
    </div>
  )
}

export default FormInput
