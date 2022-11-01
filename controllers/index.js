const { Ticket, Ride } = require('../models')

/// cruds go here
//create ride
const createRide = async (req, res) => {
  try {
    const ride = await new Ride(req.body)
    await ride.save()
    return res.status(201).json({
      ride
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
//get or read ride
const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// get single ride
const getRide = async (req, res) => {
  let selectedRide = await Ride.findById(req.params.id)
  res.json(selectedRide)
}

//update ride
const updateRide = async (req, res) => {
  let updateRide = await Ride.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateRide)
}
// delete ride
const deleteRide = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ride.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ride deleted')
    }
    throw new Error('Ride not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
/// ticket cruds
// create ticket
const createTicket = async (req, res) => {
  try {
    const ticket = await new Ticket(req.body)
    await ticket.save()
    return res.status(201).json({
      ticket
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
//read all ticket
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// get  or read single ticket
const getTicket = async (req, res) => {
  let selectedTicket = await Ticket.findById(req.params.id)
  res.json(selectedTicket)
}

//update ticket
const updateTicket = async (req, res) => {
  let updateTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updateTicket)
}
// delete ticket
const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Ride.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Ticket deleted')
    }
    throw new Error('Ride not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createRide,
  getAllRides,
  deleteRide,
  createTicket,
  getAllTickets,
  deleteTicket,
  getRide,
  getTicket,
  updateRide,
  updateTicket
}
