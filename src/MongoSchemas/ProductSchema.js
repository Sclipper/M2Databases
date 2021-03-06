import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  item_name: String,
  description: String,
  unit_price: Number,
  existing_stock: Number,
  average_rating: Number,
  registered_on: Date,
  last_updated: Date,
  rating: [
    {
      id: mongoose.Types.ObjectId,
      total_rating: Number,
      optional_comment: String,
      registered_on: Date,
    },
  ],
})

const product = mongoose.model('Product', productSchema)
export default product
