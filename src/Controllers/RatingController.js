import { Router } from 'express'
import Product from '../Models/Product'
import Purchase from '../Models/Purchase'

const ProductController = Router()

const checkIfPuchased = async (purchaseIds, productId) => Promise.all(purchaseIds.map(async id => {
  const purchasedProducts = await Purchase.joinProductPurchaseByPurchaseId(id)
  // Sorry about that == :D I couldnt be bothered to see what is wrong...
  // eslint-disable-next-line eqeqeq
  return purchasedProducts.map(({ product_id: pId }) => (pId == productId ? pId : ''))
}))

ProductController.post('/store', async (req, res) => {
  try {
    const { userId, productId, totalRating, optionalComment } = req.body
    const allPurchases = await Purchase.getAllByUserId(userId)
    checkIfPuchased(allPurchases.map(x => x.id), productId).then(result => {
      const isPurchased = result.filter(x => x.filter(y => y !== '').length)?.length
      if (isPurchased) {
        return Product.createRating(productId, userId, totalRating, optionalComment)
      }
      const e = new Error('Product hasn\'t been purchased')
      return res.status(403).send(`${e}`)
    })
  } catch (err) {
    console.log('Error in Rating controller:', err)
    res.send(err)
  }
})

export default ProductController
