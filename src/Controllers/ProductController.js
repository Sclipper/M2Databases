import { Router } from 'express'
import Product from '../Models/Product'

const ProductController = Router()

ProductController.get('/show', async (req, res) => {
  try {
    const products = await Product.getAll()
    res.send(products)
  } catch (err) {
    console.log('Error getting all products:', err)
    res.send(err)
  }
})
ProductController.post('/search', async (req, res) => {
  try {
    const { word } = req?.body
    const products = await Product.search(word)
    res.send(products)
  } catch (err) {
    console.log('Error in search:', err)
    res.send(err)
  }
})

export default ProductController
