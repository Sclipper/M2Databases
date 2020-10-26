import { Router } from 'express'
import User from '../Models/User'

const UserController = Router()

UserController.get('/show', async (req, res) => {
  const user = await User.findById(1)
  res.send(user)
})

export default UserController
