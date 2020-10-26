import express from 'express'
import UserController from './src/Controllers/UserController'
import 'dotenv/config'

const app = express()

app.use('/user', UserController)

app.listen(8081, () => console.log('Example app listening on port 8080!'))
