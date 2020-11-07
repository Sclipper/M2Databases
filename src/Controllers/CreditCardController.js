import { Router } from 'express'
import Product from '../Models/Product'

const CreditCardController = Router()

CreditCardController.post('/store', async (req, res) => {
  try {
    const products = await Product.getAll()
    res.send(products)
  } catch (err) {
    console.log('error getting all products', err)
    res.send(err)
  }
})
