// Author: Carlos F. Hidalgo
// Description: This is the schema for a Ticket in the thrill-rides database
// Project: Thrill Rides || by: Kathya Castaneda, Sarah Duperoux, Brian Lara, & Carlos Hidalgo

const { Schema } = require('mongoose')

const ticketSchema = new Schema(
  {
    ride_name: { type: String, required: true },
    ride_id: { type: Schema.Types.ObjectId, ref: 'Ride' },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    effective_date: { type: String, required: true },
    reserved_by: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = ticketSchema
