export const updateUserStatus = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  if (user) {
    return {
      isLoggedIn: true,
      firstName: user.firstName
    }
  } else {
    return {
      isLoggedIn: false,
      firstName: ''
    }
  }
}
