// Author: Carlos F. Hidalgo
// Description: This is the schema for a Ride in the thrill-rides database
// Project: Thrill Rides || by: Kathya Castaneda, Sarah Duperoux, Brian Lara, & Carlos Hidalgo

const { Schema } = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String, required: true }],
    ticket_sales: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = rideSchema
