import { connectToDatabase } from '../Utils/connectToDatabase'

const knex = connectToDatabase()

class Invoice {
  async create (purchaseId, creditCardId) {
    const purchasePaid = await knex('purchase').where({ id: purchaseId }).select('paid')
    if (purchasePaid[0].paid) {
      const e = new Error('Purchase is already paid')
      throw e
    } else {
      const card = await knex.raw('Call invoice_insert(?, ?)', [purchaseId, creditCardId])
      return card
    }
  }
}

export default new Invoice()
