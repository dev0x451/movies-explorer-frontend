import "./FormInput.css"

function FormInput({
  label,
  type,
  id,
  placeholder,
  minLength,
  pattern,
  value,
  validationMessage,
  onChange,
}) {
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
        minLength={minLength}
        maxLength="40"
        pattern={pattern}
        required
        value={value || ""}
        onChange={onChange}
      ></input>
      <div className="form-input-validation-message">{validationMessage}</div>
    </div>
  )
}

export default FormInput
