import { Router } from 'express'
import Product from '../Models/Product'
import Purchase from '../Models/Purchase'

const ProductController = Router()

const checkIfPuchased = async (purchaseIds, productId) => {
  const purchased = false
  purchaseIds.forEach(id => {
    /// Check eachproduct in that id if that exists
  })
}

ProductController.post('/store', async (req, res) => {
  try {
    const { userId, productId, totalRating, optionalComment, registeredOn } = req.body
    // find if the user has bought this product

    const allPurchases = await Purchase.getAllByUserId(userId)
    const isPurchased = await checkIfPuchased(allPurchases.map(x => x.id), productId)
    if (isPurchased) {
      console.log('purchased')
    } else {
      console.log('did not purchase')
    }
    // console.log('all purchasess', allPurchases.map(x => console.log('x', x)))
    // res.send(products)
  } catch (err) {
    console.log('error getting all products', err)
    res.send(err)
  }
})

export default ProductController
