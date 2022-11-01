import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Rides from '../components/AllRides'
const BASE_URL = '/'

const AllRides = () => {
  const [rides, setRides] = useState(null)

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}rides`)
      setRides(response.data.rides)
    }

    getRides()
  }, [])

  return rides !== null ? (
    <div id="products" className="rides-main">
      {rides.map((ride) => (
        <Link to={`/ride/${ride._id}`}>
          <Rides
            key={ride._id}
            id={ride._id}
            name={ride.name}
            image1={ride.image1}
            ticketSales={ride.ticket_sales}
          />
        </Link>
      ))}
    </div>
  ) : null
}

export default AllRides
