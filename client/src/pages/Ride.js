import React from 'react'
import SelectedRide from '../components/Ride'
import Ticket from '../pages/Ticket'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const BASE_URL = '/'

const Ride = () => {
  let { id } = useParams()

  const [selectedRide, setSelectedRide] = useState()

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`${BASE_URL}rides/${id}`)
      console.log(response)
      setSelectedRide(response.data)
      console.log(`Ride page : ${response}`)
    }
    apiCall()
  }, [])

  return (
    <div>
      <section className="ride-container">
        <Link to={`/ride/${id}`}>
          {selectedRide && <SelectedRide ride={selectedRide} />}
        </Link>
        <Ticket />
      </section>
    </div>
  )
}

export default Ride
