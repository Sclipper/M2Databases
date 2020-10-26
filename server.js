import express from 'express'
import routes from './src/routes'

const app = express()

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.use('/api', routes)

app.listen(8080, () => console.log('Example app listening on port 8080!'))
