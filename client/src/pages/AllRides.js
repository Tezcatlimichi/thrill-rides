import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Rides from '../components/AllRides'
const BASE_URL = '/api'

const AllRides = () => {
  const [rides, setRides] = useState(null)

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}/products`)
      setRides(response.data)
    }

    getRides()
  }, [])

  return rides !== null ? (
    <div id="products">
      {rides.map((ride) => (
        <Link to={`/ride/${ride._id}`}>
          <Rides
            key={ride._id}
            id={ride._id}
            name={ride.name}
            image={ride.images}
            ticketSales={ride.ticket_sales}
          />
        </Link>
      ))}
    </div>
  ) : null
}

export default AllRides
