const PORT = process.env.PORT || 3001
const cors = require('cors')
const express = require('express')
const logger = require('morgan')
const db = require('./db')
const { Ride, Ticket } = require('./models')

const app = express()
//middleware goes here
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
// create ride
app.post('/rides', async (req, res) => {
  let createdRide = await Ride.create(req.body)
  res.json(createdRide)
})
// read all rides
app.get('/rides', async (req, res) => {
  let allRides = await Ride.find({})
  res.json(allRides)
})

// read single ride
app.get('/rides/:id', async (req, res) => {
  let selectedRide = await Ride.findById(req.params.id)
  res.json(selectedRide)
})

//post-update ride
app.put('/rides/:id', async (req, res) => {
  let updateRide = await Ride.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateRide)
})

//delete
app.delete('/rides/:id', async (req, res) => {
  let deletedRide = await Ride.findByIdAndDelete(req.params.id)
  res.json(deletedRide)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
