/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import User from '../MongoSchemas/UserSchema'
import Product from '../MongoSchemas/ProductSchema'
import { firstNames, lastNames, emails, months, years, cities, streets } from './listData'
import { getRandomWords, getRandom, randomDate } from './generators'

const generateCreditCards = (amount, name) => {
  const creditCards = []
  for (let i = 0; i <= amount; i++) {
    creditCards.push({
      // id: mongoose.Types.ObjectId,
      cardholder_name: name,
      expiry_month: months[getRandom({ to: 11 })],
      expiry_year: years[getRandom({ to: years.length - 1 })],
      security_code: getRandom({ from: 100, to: 999 }),
      total_amount_paid: getRandom({ to: 9999.99 }).toFixed(2),
      registered_on: randomDate(),
    })
  }
  return creditCards
}

const generateAddress = amount => {
  const addresses = []
  for (let i = 0; i <= amount; i++) {
    addresses.push({
      city_name: cities[getRandom({ to: 43 })],
      zip_code: getRandom({ from: 1000, to: 9000 }),
      street: streets[getRandom({ to: streets.length - 1 })],
      registered_on: randomDate(),
      further_details: getRandomWords(getRandom({ to: 10 })),
    })
  }
  return addresses
}

const generateProductPurchases = (amount, products) => {
  const productPurchases = []
  for (let i = 0; i <= amount; i++) {
    const number = getRandom({ to: products.length - 1 })
    productPurchases.push({
      product_id: products[number].id,
      product_quantity: products[number].existing_stock,
      moment_unit_price: products[number].unit_price,
    })
  }
  return productPurchases
}

const generatePurchases = (amount, products, creditCards) => {
  const purchases = []
  const productPurchases = generateProductPurchases(getRandom({ to: 20 }), products)
  for (let i = 0; i <= amount; i++) {
    const number = getRandom({ to: creditCards.length - 1 })
    const purchasePrice = getRandom({ to: 9999.99 }).toFixed(2)
    purchases.push({
      // id: mongoose.Types.ObjectId,
      purchase_price: purchasePrice,
      paid: true,
      product_purchase: productPurchases,
      invoice: {
        credit_card_id: creditCards[number].id,
        issue_date: randomDate(),
        applicable_tax: purchasePrice * 0.25,
        total_monetary_amount: purchasePrice,
      },
    })
  }
  return purchases
}

export const generatePeople = async () => {
  console.log('last', cities.length)
  Product.find().exec().then(res => {
    const products = res.map(x => ({
      id: x._id,
      unit_price: x.unit_price,
      existing_stock: x.existing_stock,
    }
    ))
    const firstName = firstNames[getRandom({ from: 1, to: 1434 })]
    const lastName = lastNames[getRandom({ from: 1, to: lastNames.length - 1 })]
    const creditCards = generateCreditCards(getRandom({ to: 5 }), `${firstName} ${lastName}`)
    const addresses = generateAddress(getRandom({ to: 2 }))
    const purchases = generatePurchases(getRandom({ to: 10 }), products, creditCards)

    const totalMoneySpend = creditCards
      .map(x => x.total_amount_paid)
      // eslint-disable-next-line radix
      .reduce((a, b) => parseInt(a) + parseInt(b))
    console.log('total', totalMoneySpend)
    const user = new User({
      first_name: firstName,
      last_name: lastName,
      phone_number: `${getRandom({ from: 11111111, to: 99999999 })}`,
      secure_password: getRandomWords(1),
      email_address: emails[getRandom({ from: 1, to: 100 })],
      total_money_spent: totalMoneySpend,
      registered_on: randomDate(),
      last_updated: randomDate(),
      creditCard: creditCards,
      address: addresses,
      purchase: purchases,
    })
    console.log('saving', user)
    return user.save()
  })
}

export const populatePeopleMongoDb = amount => {
  for (let i = 0; i <= amount; i++) {
    generatePeople()
  }
}
