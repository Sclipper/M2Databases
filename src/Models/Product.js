import { connectToDatabase } from '../Utils/connectToDatabase'

const knex = connectToDatabase()
const usefullColumns = ['id', 'item_name', 'description', 'unit_price', 'existing_stock', 'average_rating']

class Product {
  async getAll () {
    const allProducts = await knex.column(usefullColumns).select().from('product')
    return allProducts
  }

  async search (word) {
    const result = await knex('product').column(usefullColumns).where(
      'product.item_name', 'like', `%${word}%`,
    )
    return result
  }

  async createRating (productId, userId, totalRating, optionalComment) {
    return knex.raw('Call create_rating(?, ?, ?, ?)', [productId, userId, totalRating, optionalComment])
  }
}

export default new Product()
