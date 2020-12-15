import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  id: mongoose.Types.ObjectId,
  first_name: String,
  last_name: String,
  phone_number: String,
  secure_password: String,
  email_address: String,
  total_money_spent: Number,
  registered_on: Date,
  last_updated: Date,
  creditCard: [
    {
      id: mongoose.Types.ObjectId,
      cardholder_name: String,
      expiry_month: String,
      expiry_year: String,
      security_code: String,
      total_amount_paid: Number,
      registered_on: Date,
    },
  ],
  address: [
    {
      id: mongoose.Types.ObjectId,
      city_name: String,
      zip_code: Number,
      street: String,
      registered_on: Date,
      further_details: String,
    },
  ],
  purchase: [
    {
      id: mongoose.Types.ObjectId,
      purchase_price: Number,
      paid: Boolean,
      product_purchase: [
        {
          product_id: mongoose.Types.ObjectId,
          product_quantity: Number,
          moment_unit_price: Number,
        },
      ],
      invoice: {
        credit_card_id: mongoose.Types.ObjectId,
        issue_date: Date,
        applicable_tax: Number,
        total_monetary_amount: Number,
      },
    },
  ],
})

const user = mongoose.model('User', userSchema)
export default user
