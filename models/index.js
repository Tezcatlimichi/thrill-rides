const mongoose = require('mongoose')
const ticketSchema = require('./Ticket')
const rideSchema = require('./Ride')

const Ticket = mongoose.model('Ticket', ticketSchema)
const Ride = mongoose.model('Ride', rideSchema)

module.exports = {
  Ticket,
  Ride
}
