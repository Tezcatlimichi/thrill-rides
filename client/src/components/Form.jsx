import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Form = (props) => {
  const { id } = useParams()

  let initialState = {
    ride_name: props.name, //placeholder
    ride_id: id,
    price: props.price,
    quantity: 0,
    effective_date: '',
    reserved_by: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('/tickets', formState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <div>
      <form id="ticket-form" onSubmit={handleSubmit}>
        <label htmlFor="reserved_by">Name:</label>
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
