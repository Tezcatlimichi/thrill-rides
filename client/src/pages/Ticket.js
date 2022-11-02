import axios from 'axios'
import { useState, useEffect } from 'react'
import TicketArray from '../components/Ticket'
import Form from '../components/Form'
const BASE_URL = '/'

const Ticket = () => {
  const [formToggle, setFormToggle] = useState()
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const getTickets = async () => {
      const response = await axios.get(`${BASE_URL}tickets`)
      setTickets(response.data.tickets)
      console.log(response.data.tickets)
    }

    getTickets()
  }, [])

  return (
    <div>
      <section>
        {tickets.map((ticket) => (
          <TicketArray
            key={ticket._id}
            ticketId={ticket._id}
            rideName={ticket.ride_name}
            rideId={ticket.ride_id}
            price={ticket.price}
            quantity={ticket.quantity}
            effectiveDate={ticket.effective_date}
            reservedBy={ticket.reserved_by}
          />
        ))}
        <button type="button" onClick={() => setFormToggle(true)}>
          Create a ticket
        </button>
        {formToggle && (
          <Form action="create" id="" setFormToggle={setFormToggle} />
        )}
      </section>
    </div>
  )
}

export default Ticket
