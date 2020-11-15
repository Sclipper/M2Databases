import express from 'express'
import bodyParser from 'body-parser'
import UserController from './src/Controllers/UserController'
import ProductController from './src/Controllers/ProductController'
import CreditCardController from './src/Controllers/CreditCardController'
import InvoiceController from './src/Controllers/InvoiceController'
import RatingController from './src/Controllers/RatingController'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', UserController)
app.use('/product', ProductController)
app.use('/credit_card', CreditCardController)
app.use('/invoice', InvoiceController)
app.use('/rating', RatingController)

app.listen(8080, () => console.log('Example app listening on port 8080!'))
