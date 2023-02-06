import { Link } from "react-router-dom"
import "./Register.css"
import LogoLink from "../LogoLink/LogoLink"
import SubmitButton from "../SubmitButton/SubmitButton"
import FormInput from "../FormInput/FormInput"
import APIResponseMessage from "../APIErrorMessage/APIResponseMessage"
import { useFormWithValidation } from "../../hooks/validate"

function Register({ onSubmit, apiErrorCode }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation()
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(
      values["name-input"],
      values["email-input"],
      values["password-input"]
    )
  }

  return (
    <div className="register">
      <APIResponseMessage apiErrorCode={apiErrorCode} />

      <div className="register__container">
        <LogoLink />
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-input">
            <FormInput
              label="Имя"
              type="text"
              id="name-input"
              minLength="2"
              placeholder="не менее 2 символов"
              pattern="[a-zA-ZА-яёЁ\-\s]*"
              value={values["name-input"]}
              validationMessage={errors["name-input"]}
              onChange={handleChange}
            />
            <FormInput
              label="E-mail"
              type="email"
              id="email-input"
              minLength="3"
              placeholder="pochta@yandex.ru"
              value={values["email-input"]}
              validationMessage={errors["email-input"]}
              onChange={handleChange}
            />
            <FormInput
              label="Пароль"
              type="password"
              id="password-input"
              placeholder="не менее 6 символов"
              minLength="6"
              value={values["password-input"]}
              validationMessage={errors["password-input"]}
              onChange={handleChange}
            />
          </div>

          <div className="register__form-submit-button">
            <SubmitButton
              title="Зарегистрироваться"
              isActive={isValid}
              apiErrorCode={apiErrorCode}
            />
          </div>
        </form>
        <div className="register__bottom-text-container">
          <span className="register__bottom-text-question">
            Уже зарегистрированы?
          </span>
          <Link
            className="register__bottom-text-link link-hover-effect"
            to="/signin"
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
