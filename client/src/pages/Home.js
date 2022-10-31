import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Ride from '../pages/Ride'
const Home = () => {
  return (
    <div className="main">
      <section className="banner">
        <Banner />
      </section>
      <h1 className="home-section-title">Featured Ride</h1>
      <section>
        <Link to={`/ride`}>
          <Ride />
        </Link>
      </section>
    </div>
  )
}

export default Home
