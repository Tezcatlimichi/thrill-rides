const PORT = process.env.PORT || 3001
const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const routes = require('./routes')

const db = require('./db')
const { Ride, Ticket } = require('./models')

const app = express()

//middleware goes here
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
