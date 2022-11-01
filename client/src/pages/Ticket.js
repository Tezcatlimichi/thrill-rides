import axios from 'axios'
import { useState, useEffect } from 'react'
import TicketArray from '../components/Ticket'
const BASE_URL = '/'

const Ticket = () => {
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
        {/*tickets.map((ticket) => (
          <TicketArray
            key={ticket._id}
            id={ticket._id}
            rideName={ticket.ride_name}
            rideId={ticket.ride_id}
            price={ticket.price}
            quantity={ticket.quantity}
            effectiveDate={ticket.effective_date}
            reservedBy={ticket.reserved_by}
          />
        ))*/}
      </section>
    </div>
  )
}

export default Ticket
