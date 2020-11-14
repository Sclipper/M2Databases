import { Router } from 'express'
import Invoice from '../Models/Invoice'

const InvoiceController = Router()

InvoiceController.post('/store', async (req, res) => {
  try {
    const { purchaseId } = req?.body
    await Invoice.create(purchaseId)
    // res.send(`Successfully added card: ${userId}, ${cardholderName}, ${expiryMonth}, ${expiryYear}, ***`)
  } catch (err) {
    console.log('Error creting new card', err)
    res.send(err)
  }
})

export default InvoiceController
