import { useState, useCallback } from "react"

//хук управления формой
export function useForm() {
  const [values, setValues] = useState({})

  const handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest("form").checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, setValues, handleChange, errors, isValid, resetForm }
}
