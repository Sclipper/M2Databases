import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import UserController from './src/Controllers/UserController'
import ProductController from './src/Controllers/ProductController'
import CreditCardController from './src/Controllers/CreditCardController'
import InvoiceController from './src/Controllers/InvoiceController'
import RatingController from './src/Controllers/RatingController'
import TestingController from './src/Controllers/TestingController'
import 'dotenv/config'

const app = express()
mongoose.connect(`mongodb+srv://root:${process.env.MONGO_PASS}@lesclustericusmaximus.qckud.mongodb.net/${process.env.CLUSTER_NAME}?retryWrites=true&w=majority`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
// generateProducts()
app.use('/user', UserController)
app.use('/product', ProductController)
app.use('/credit_card', CreditCardController)
app.use('/invoice', InvoiceController)
app.use('/rating', RatingController)
app.use('/testing', TestingController)

app.listen(8080, () => console.log('Example app listening on port 8080!'))
