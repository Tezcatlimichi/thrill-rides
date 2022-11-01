// Author: Carlos F. Hidalgo
// Description: This is the schema for a Ride in the thrill-rides database
// Project: Thrill Rides || by: Kathya Castaneda, Sarah Duperoux, Brian Lara, & Carlos Hidalgo

const { Schema } = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    height: { type: String, required: true },
    companion: { type: String, required: true },
    ride_type: { type: String, required: true },
    best_for: { type: String, required: true },
    accessibility: { type: String, required: true },
    ticket_sales: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = rideSchema
