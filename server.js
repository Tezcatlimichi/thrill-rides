const PORT = process.env.PORT || 3001
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
//middleware goes here
app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit. Thrill rides' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
