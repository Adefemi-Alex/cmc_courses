export const ShowOnLogin = ({ isLoggedIn, setIsLogedIn, children }) => {
 if (isLoggedIn) {
  return children
 }
 return null
}

export const ShowOnLogout = ({ isLoggedIn, setIsLoggedIn, children }) => {
 if (!isLoggedIn) {
  return children
 }
 return null
}
