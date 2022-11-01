import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'

const BASE_URL = '/'

const Home = () => {
  const [rides, setRides] = useState([])

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}rides`)
      setRides(response.data.rides)
      console.log(response.data)
    }

    getRides()
  }, [])

  return (
    <div className="main">
      <section className="banner">
        {rides.map((ride) => (
          <Link to={`/ride/${ride._id}`}>
            <Banner image={ride.images} />
          </Link>
        ))}
      </section>
      <h1 id="home-section-title">Featured Ride</h1>
      <section>
        {rides.map((ride) => (
          <Link to={`/ride/${ride._id}`}>
            <Featured
              key={ride._id}
              name={ride.name}
              description={ride.description}
              image={ride.images}
              ticketSales={ride.ticket_sales}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
