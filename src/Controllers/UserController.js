import User from '../Models/User'

export const getUser = (req, res) => {
  const user = User.findById()
  console.log('returning user from user model')
  return user
}
