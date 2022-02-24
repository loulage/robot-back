
export const verifyUserInput = (userInput) => {
  const regex =   /\b[MRL]+\b(?![,])/
  const isValid = regex.test(userInput)
  return isValid;
}