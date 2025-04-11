export const isLoggedIn = ()=>{
  const session = JSON.parse(localStorage.getItem("userSession"));
  if(!session) return false;
  return new Date().getTime() < session.expiresAt;
}
export const getUserRole = () => {
  const session = JSON.parse(localStorage.getItem('userSession'))
  return session?.role
}
export const logOut = ()=>{
  localStorage.removeItem('userSession')
}