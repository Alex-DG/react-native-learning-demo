export const LoginValidations = () => {
  const isEmailValid = (text: string) => /@/.test(text)
  const isPasswordValid = (password: string) => password.length >= 8
  const areFormFieldsValid = (email: string, password: string) =>
    isEmailValid(email) && isPasswordValid(password)

  return {
    isEmailValid,
    isPasswordValid,
    areFormFieldsValid,
  }
}
