import { connectToDatabase } from '../Utils/connectToDatabase'

const knex = connectToDatabase()

class CreditCard {
  async store (userId, cardholder_name, expiry_month, expiry_year, security_code) {
    try {
      knex.raw('Call create_new_card(userId, cardholder_name, expiry_month, expiry_year, security_code)')
    } catch (err) {
      console.log('err', err)
    }
  }
}

export default new CreditCard()
