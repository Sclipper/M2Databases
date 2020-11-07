import { Router } from 'express'
import CreditCard from '../Models/CreditCard'

const CreditCardController = Router()

CreditCardController.post('/store', async (req, res) => {
  try {
    const variable = await CreditCard.store()
    // res.send()
  } catch (err) {
    console.log('error getting all products', err)
    res.send(err)
  }
})

export default CreditCardController
