import axios from 'axios'
import { useState } from 'react'

const Form = (props) => {
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
        price: '',
        quantity: 0,
        effective_date: '',
        reserved_by: ''
      }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    console.log(`im firing! my action is ${props.action}`)
    event.preventDefault()
    if (props.action === 'create') {
      await axios.post('/tickets', formState)
      props.setFormToggle(false)
    } else if (props.action === 'update') {
      console.log('im updating')
      await axios.put(`/tickets/${props.ticket_info.ticketId}`, formState)
      props.setFormToggle(false)
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
        <label htmlFor="reserved_by">Ticket Holder: </label>
        <input
          type="text"
          id="reserved_by"
          value={formState.reserved_by}
          onChange={handleChange}
        />
        <label htmlFor="effective_date">Date:</label>
        <input
          type="date"
          id="effective_date"
          value={formState.effective_date}
          onChange={handleChange}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="range"
          id="quantity"
          value={formState.quantity}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
