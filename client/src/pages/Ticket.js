import axios from 'axios'
import { useState, useEffect } from 'react'
const BASE_URL = '/'

const Ticket = () => {
  const [tickets, setTickets] = useState({})

  useEffect(() => {
    const getTickets = async () => {
      const response = await axios.get(`${BASE_URL}tickets`)
      setTickets(response.data)
      console.log(response.data)
    }

    getTickets()
  }, [])

  return (
    <div>
      <h1>Buy Tickets!</h1>
    </div>
  )
}

export default Ticket
