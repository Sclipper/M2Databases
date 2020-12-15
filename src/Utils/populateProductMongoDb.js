/* eslint-disable no-plusplus */
import Product from '../MongoSchemas/ProductSchema'
import { products } from './listData'
import { getRandomWords, getRandomFloat, getRandom, randomDate } from './generators'

export const generateRatings = () => {
  let ratingArray = []
  const amount = getRandom({ to: 10 })
  for (let i = 0; i <= amount; i++) {
    const data = {
      total_rating: getRandom({ from: 1, to: 5 }),
      optional_comment: getRandomWords(getRandom({ to: 10 })),
      registered_on: randomDate(),
    }
    ratingArray = [...ratingArray, data]
  }
  return ratingArray
}

const calculateAverageRating = ratings => {
  const summ = ratings.map(x => x.total_rating).reduce((a, b) => a + b)
  return (summ / ratings.length).toFixed(2)
}

export const generateProducts = async () => {
  const ratings = generateRatings()
  const product = new Product({
    item_name: products[getRandom({ to: 693 })],
    description: getRandomWords(getRandom({ to: 10 })),
    unit_price: getRandomFloat({ from: 0.1, to: 10 }),
    existing_stock: getRandom({ from: 1, to: 1000 }),
    average_rating: calculateAverageRating(ratings),
    registered_on: randomDate(),
    last_updated: randomDate(),
    rating: ratings,
  })
  console.log('saving', product)
  return product.save()
}

export const populateProductMongoDb = amount => {
  for (let i = 0; i <= amount; i++) {
    generateProducts()
  }
}
