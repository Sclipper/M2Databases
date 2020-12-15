import 'dotenv/config'

class User {
  findById (id) {
    console.log('querry the database for the particular id')
    return { user: { id: '1', first_name: 'bla bla  and so on...' } }
  }
}

export default new User()
