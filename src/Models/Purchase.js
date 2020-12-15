import { connectToDatabase } from '../Utils/connectToDatabase'
import 'dotenv/config'

const knex = connectToDatabase()

class Purchase {
  async getAllByUserId (userId) {
    return knex('purchase').where({ user_id: userId, paid: 1 }).select()
  }

  async joinProductPurchaseByPurchaseId (purchaseId) {
    return knex
      .select('product_purchase.product_id')
      .from('purchase')
      .join('product_purchase', 'product_purchase.purchase_id', 'purchase.id')
      .where('purchase.id', '=', purchaseId)
  }
}

export default new Purchase()
