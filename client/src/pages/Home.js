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
      console.log(response.data.rides)

      setFeaturedRide(
        response.data.rides[
          Math.floor(Math.random() * response.data.rides.length - 0)
        ]
      )
    }

    getRides()
  }, [])

  const scrLeft = () => {
    let left = document.querySelector('.scroll-images')
    left.scrollBy(-2000, 0)
  }

  const scrRight = () => {
    let right = document.querySelector('.scroll-images')
    right.scrollBy(2000, 0)
  }

  // animate on scroll

  function reveal() {
    let reveals = document.querySelectorAll('.reveal-title, .reveal-image')

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener('scroll', reveal)

  return (
    <div className="main">
      <div id="inline">
        <span id="scrLeft" onClick={scrLeft}></span>

        <section className="banner-container inline-snap scroll-images">
          {rides.map((ride) => (
            <Link to={`/ride/${ride._id}`}>
              <Banner image1={ride.image1} name={ride.name} key={ride._id} />
            </Link>
          ))}
        </section>

        <span id="scrRight" onClick={scrRight}></span>
      </div>

      <h1 id="home-section-title" className="reveal-title">
        Featured Ride
      </h1>

      <section id="featured-container" className="reveal-image">
        <Link to={`/ride/${featuredRide._id}`}>
          <Featured ride={featuredRide} />
        </Link>
      </section>
    </div>
  )
}

export default Home
