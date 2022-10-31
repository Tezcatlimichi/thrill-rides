const { Ticket, Ride } = require('../models')

/// cruds go here
//create
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
//get or read
const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find()
    return res.status(200).json({ rides })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
// delete
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
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
    return res.status(200).json({ tickets })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

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
  deleteTicket
}
