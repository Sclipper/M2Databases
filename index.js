import express from 'express'
import bodyParser from 'body-parser'
import UserController from './src/Controllers/UserController'
import ProductController from './src/Controllers/ProductController'
import CreditCardController from './src/Controllers/CreditCardController'

const app = express()

// const knex = connectToDatabase()
// const testF = async () => {
//   try {
//     const a = await knex.column('first_name').select().from('user')
//     console.log(a)
//     return a
//   } catch (err) {
//     console.log('err', err)
//   }
// }
// testF()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', UserController)
app.use('/product', ProductController)
app.use('/credit_card', CreditCardController)

app.listen(8080, () => console.log('Example app listening on port 8080!'))
