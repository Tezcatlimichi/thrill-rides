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

//delete ride
app.delete('/rides/:id', async (req, res) => {
  let deletedRide = await Ride.findByIdAndDelete(req.params.id)
  res.json(deletedRide)
})
/// tickets
//create tickets
app.post('/tickets/:id', async (req, res) => {
  const requestBody = { ...req.body }
  let createdTicket = await Ticket.create(req.params.id, requestBody)
  res.json(createdTicket)
})
//read tickets
app.get('/tickets', async (req, res) => {
  let allTickets = await Ticket.find({})
  res.json(allTickets)
})
//read ticket
app.get('/tickets/:id', async (req, res) => {
  let selectedTicket = await Ticket.findById(req.params.id)
  res.json(selectedTicket)
})
//update ticket

app.put('/tickets/:id', async (req, res) => {
  let updateTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateTicket)
})

//delete ticket
app.delete('/tickets/:id', async (req, res) => {
  let deletedTicket = await Ticket.findByIdAndDelete(req.params.id)
  res.json(deletedTicket)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
