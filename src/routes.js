import { Router } from 'express'
import { getUser } from './Controllers/UserController'

const router = Router()

router.get('/user', async (req, res) => {
  getUser(req, res)
})
