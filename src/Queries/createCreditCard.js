import User from '../MongoSchemas/UserSchema'

// userId, cardholderName, expiryMonth, expiryYear, securityCode
export const createCreditCard = (userId, cardholderName, expiryMonth, expiryYear, securityCode) => {
  const user = User.update(
    { _id: userId },
    {
      $push: {
        creditCard: {
          cardholder_name: cardholderName,
          expiry_month: expiryMonth,
          expiry_year: expiryYear,
          security_code: securityCode,
          total_amount_paid: 0,
          registered_on: new Date(),
        },
      },
    },
  )
  console.log('updating', user)
  return user
}
