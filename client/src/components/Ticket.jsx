import { PromiseProvider } from 'mongoose'
import { useState } from 'react'
import React from 'react'
import Form from '../components/Form'
import axios from 'axios'
const BASE_URL = '/'

const Ticket = (props) => {
  const [formToggle, setFormToggle] = useState()

  const handleRefresh = () => {
    window.location.reload(false)
  }

  const handleDelete = async () => {
    await axios.delete(`${BASE_URL}tickets/${props.ticketId}`)
    handleRefresh()
  }

  return (
    <div>
      <button type="button" onClick={() => setFormToggle(true)}>
        Update a ticket
      </button>
      <button onClick={handleDelete} className="delete-button">
        Delete Tickets
      </button>
      <h3>{props.rideName}</h3>
      <h4>{props.price}</h4>
      {formToggle && <Form ticket_info={props} setFormToggle={setFormToggle} />}
    </div>
  )
}

export default Ticket
