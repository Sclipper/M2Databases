import { connectToDatabase } from '../Utils/connectToDatabase'

const knex = connectToDatabase()

class CreditCard {
  async store (userId, cardholderName, expiryMonth, expiryYear, securityCode) {
    try {
      const card = await knex.raw('Call create_credit_card(?, ?, ?, ?, ?)', [userId, cardholderName, expiryMonth, expiryYear, securityCode])
      return card
    } catch (err) {
      console.log('err', err)
      return err
    }
  }
}

export default new CreditCard()
