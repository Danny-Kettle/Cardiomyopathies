export const updateUserStatus = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  if (user) {
    return {
      isLoggedIn: true,
      firstName: user.firstName,
      username: user.username,
      lastName: user.lastName,
      institute: user.institute,
      id: user.id,
      role: user.role
    }
  } else {
    return {
      isLoggedIn: false,
      firstName: '',
      username: '',
      lastName: '',
      institute: '',
      id: '',
      role: ''
    }
  }
}
