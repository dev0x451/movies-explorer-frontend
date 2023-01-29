import "./FormInput.css"

function FormInput({ label, type, id, placeholder, value, onChange }) {
  return (
    <div className="forminput">
      <label className="forminput__label" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className="forminput__input"
        id={id}
        name={id}
        placeholder={placeholder}
        minLength="2"
        maxLength="30"
        required
        value={value}
        onChange={onChange}
      ></input>
      <div className="form-input-validation-message">Ошибка валидации</div>
    </div>
  )
}

export default FormInput
