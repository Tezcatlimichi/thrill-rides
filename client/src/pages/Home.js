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
      <h3 id="home-intro-text">
        Welcome to Thrill Rides. If you are looking for the most X-treme, jaw
        dropping, heart stopping rides I the USA, you have come to the right
        spot. Every week we do an extensive market research to bring to you the
        latest information on the most popular rides out there. Our rigorous
        research involve park ticket sales, queue lines wait times, an weekly
        questionnaires, so we can make sure we are giving you the latests, and
        most up to date info. Once we gather all data, we chose the top rides,
        with the option of buying your tickets all in one spot.
      </h3>
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
