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
    <div id='ticket-content'>
      <div className='ticket-buttons'>
      <button id='update-button' type="button" onClick={() => setFormToggle(true)}>
        Update ticket
      </button>
      <button id='delete-button' onClick={handleDelete} className="delete-button">
        Delete ticket
      </button>
      </div>
      <h3>Ride Name: {props.rideName}</h3>
      <h4>Person Name: {props.reservedBy}</h4>
      <h4>Date: {props.effectiveDate}</h4>
      <h4>Price: ${props.price}</h4>
      {formToggle && (
        <Form
          action="update"
          ticket_info={props}
          setFormToggle={setFormToggle}
        />
      )}
    </div>
  )
}

export default Ticket
