import { Router } from 'express'
import { populateProductMongoDb } from '../Utils/populateProductMongoDb'
import { populatePeopleMongoDb } from '../Utils/populatePeopleMongoDb'

const TestingController = Router()

// TestingController.get('/test_write', async (req, res) => {
//   try {
//     console.log('bla')
//     const test = new Test({
//       _id: new mongoose.Types.ObjectId(),
//       name: 'Nasko',
//       price: 23,
//     })
//     test.save()
//     res.send(test)
//   } catch (err) {
//     console.log('Error getting all products:', err)
//     res.send(err)
//   }
// })
// TestingController.get('/test_get', async (req, res) => {
//   try {
//     Test.findById('5fd633a937258d2c7c0974f0').exec().then(data => {
//       console.log('datta', data)
//       res.send(data.name)
//     }).catch(err => {
//       console.log('err', err)
//       res.send(err)
//     })
//   } catch (err) {
//     console.log('Error getting all products:', err)
//     res.send(err)
//   }
// })
TestingController.post('/populate_database', async (req, res) => {
  try {
    const { amount } = req.body
    populateProductMongoDb(amount)
    populatePeopleMongoDb(amount)
  } catch (err) {
    console.log('Error populating the database', err)
    res.send(err)
  }
})

export default TestingController
