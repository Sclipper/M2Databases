import 'dotenv/config'

export const connectToDatabase = () => require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'ma_one',
  },
})
