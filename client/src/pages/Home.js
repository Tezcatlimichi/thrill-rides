import React from 'react'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className="main">
      <section className="banner">
        <Banner />
      </section>
      <h1 className="home-section-title">Featured Rides</h1>
    </div>
  )
}

export default Home
