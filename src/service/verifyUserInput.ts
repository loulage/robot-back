export const verifyUserInput = (userInput) => {
  if(userInput) {
    
    const regex =   /\b[MRL]+\b(?![,])/
    const isValid = regex.test(userInput)
    return isValid;
  }
  return false
}