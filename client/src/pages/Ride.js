import React from 'react'
import SelectedRide from '../components/Ride'
import Ticket from '../pages/Ticket'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SelectedRide from '../components/Ride'
import Ticket from '../pages/Ticket'
import axios from 'axios'
const BASE_URL = '/'

const Ride = () => {
  let { id } = useParams()
  const [selectedRide, setSelectedRide] = useState('')

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}rides/${id}`)
      setSelectedRide(response.data)
    }
    apiCall()
  }, [])

  return (
    <div>
      <section className="ride-container">
        <Link to={`/ride/${id}`}>
          <SelectedRide ride={selectedRide} />
        </Link>
      </section>
      <Ticket />
    </div>
  )
}

export default Ride
