import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Rides from '../components/AllRides'
const BASE_URL = '/'
import Ride from '../components/Ride'
import Ticket from '../pages/Ticket'

const Ride = () => {
  let { id } = useParams()
  const [selectedRide, setSelectedRide] = useState('')

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}rides/${id}`)
      setSelectedRide(response.data)
    }
    apiCall()
  })

  return (
    <div>
      <section className="ride-container">
        <h3 id="ride-title">Title</h3>
        <Link to={`/ride/${id}`}>
          <Ride ride={selectedRide} />
        </Link>
        <img
          src="https://via.placeholder.com/1000x600/09f/fff"
          alt="ride name"
          className="ride-image"
        />
      </section>
      <Ticket />
    </div>
  )
}

export default Ride
