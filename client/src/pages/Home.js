import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Featured from '../components/Featured'

const BASE_URL = '/'

const Home = () => {
  const [rides, setRides] = useState([])
  const [featuredRide, setFeaturedRide] = useState({})

  useEffect(() => {
    const getRides = async () => {
      const response = await axios.get(`${BASE_URL}rides`)
      setRides(response.data.rides)

      setFeaturedRide(
        response.data.rides[
          Math.floor(Math.random() * response.data.rides.length - 0)
        ]
      )
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
        <Featured ride={featuredRide} />
      </section>
    </div>
  )
}

export default Home
