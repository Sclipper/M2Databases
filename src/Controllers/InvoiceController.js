import { Router } from 'express'
import Invoice from '../Models/Invoice'

const InvoiceController = Router()

InvoiceController.post('/store', async (req, res) => {
  try {
    const { purchaseId, creditCardId } = req?.body
    await Invoice.create(purchaseId, creditCardId)
    res.send(`Successfully created invoice with Purchase ID: ${purchaseId}`)
  } catch (err) {
    res.send(`Error creting new invoice: ${err}`)
  }
})

export default InvoiceController
