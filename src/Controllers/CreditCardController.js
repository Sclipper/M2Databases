import { Router } from 'express'
import CreditCard from '../Models/CreditCard'

const CreditCardController = Router()

CreditCardController.post('/store', async (req, res) => {
  try {
    const { userId, cardholderName, expiryMonth, expiryYear, securityCode } = req?.body
    await CreditCard
      .store(userId, cardholderName, expiryMonth, expiryYear, securityCode)
    res.send(`Successfully added card: ${userId}, ${cardholderName}, ${expiryMonth}, ${expiryYear}, ***`)
  } catch (err) {
    console.log('Error creting new card', err)
    res.send(err)
  }
})

export default CreditCardController
