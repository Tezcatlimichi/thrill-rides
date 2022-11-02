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
    <div id="rides" className="rides-main">
      <h2 className="rides-text">
        Here is a collection of all to top rides of this month. Each ride have a
        high score on it's thrill factor, you will have a lot of fun riding
        them, and they are sure to make your visit at the park worth it!
      </h2>

      <h2 className="rides-text">Scroll Down</h2>
      <h2 className="rides-arrow">&#x27F1;</h2>
      {rides.map((ride) => (
        <Link to={`/ride/${ride._id}`}>
          <Rides
            key={ride._id}
            id={ride._id}
            name={ride.name}
            image3={ride.image3}
            ticketSales={ride.ticket_sales}
          />
        </Link>
      ))}
    </div>
  ) : null
}

export default AllRides
