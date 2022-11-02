import axios from 'axios'
import { useState } from 'react'
const BASE_URL = '/'

const Form = (props) => {
  const handleRefresh = () => {
    window.location.reload(false)
  }
  let isCreate
  let initialState = props.ticket_info
    ? {
        ride_name: props.ticket_info.rideName,
        ride_id: props.ticket_info.rideId,
        price: props.ticket_info.price,
        quantity: 0,
        effective_date: '',
        reserved_by: ''
      }
    : {
        ride_name: '',
        ride_id: '',
        price: 0,
        quantity: 0,
        effective_date: '',
        reserved_by: ''
      }

  const [formState, setFormState] = useState(initialState)

 
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (props.action === 'create') {
      await axios.post(`${BASE_URL}tickets`, formState)
      props.setFormToggle(false)
    } else if (props.action === 'update') {
      await axios.put(
        `${BASE_URL}tickets/${props.ticket_info.ticketId}`,
        formState
      )
      props.setFormToggle(false)
      handleRefresh()
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  if (props.action === 'create') {
    isCreate = true
  } else {
    isCreate = false
  }

  return (
    <div>
      <form id="ticket-form" onSubmit={handleSubmit}>
        {isCreate && (
          <div className="form-subject-container">
            <label htmlFor="ride_name">Ride Name: </label>
            <select
              id="ride_name"
              value={formState.ride_name}
              onChange={handleChange}
            >
              <option>-Select Ride Name-</option>
              <option value="Skull Island: Reign of Kong">
                Skull Island: Reign of Kong
              </option>
              <option value="The Incredible Hulk Coaster">
                The Incredible Hulk Coaster
              </option>
              <option value="X²">X²</option>
            </select>
          </div>
        )}
        <div className="form-subject-container">
          <label htmlFor="reserved_by">Name:</label>
          <input
            type="text"
            id="reserved_by"
            value={formState.reserved_by}
            onChange={handleChange}
          />
        </div>
        <div className="form-subject-container">
          <label htmlFor="effective_date">Date:</label>
          <input
            type="date"
            id="effective_date"
            value={formState.effective_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-subject-container">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={formState.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
