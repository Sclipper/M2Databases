import { connectToDatabase } from '../Utils/connectToDatabase'

const knex = connectToDatabase()

class Purchase {
  async getAllByUserId (userId) {
    return knex('purchase').where({ user_id: userId, paid: 1 }).select()
  }
}

export default new Purchase()
