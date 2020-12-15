import { connectToDatabase } from '../Utils/connectToDatabase'
import { createCreditCard } from '../Queries/createCreditCard'
import 'dotenv/config'

const knex = connectToDatabase()
const { database } = process.env

class CreditCard {
  async store (userId, cardholderName, expiryMonth, expiryYear, securityCode) {
    try {
      if (database === 'mongo') {
        return createCreditCard(userId, cardholderName, expiryMonth, expiryYear, securityCode)
      }
      return knex.raw('Call create_credit_card(?, ?, ?, ?, ?)', [userId, cardholderName, expiryMonth, expiryYear, securityCode])
    } catch (err) {
      console.log('err', err)
      return err
    }
  }
}

export default new CreditCard()
