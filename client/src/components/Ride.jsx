import React from 'react'
import { Link } from 'react-router-dom'

const Ride = (props) => {
  console.log(props)


  return (
    <div>
      <div id="ride-header">
     <img src={props.ride.image2} alt={props.ride.name} width="1000px" height="600px" id='ride-image'/>
        <div id="ride-text-container">
          <h1 id="ride-name" className="font-2">
            {props.ride.name}
          </h1>
          <div className='ride-info'> 
          <h3 className='ride-info-text'>📏 &nbsp;Height: {props.ride.height}</h3>
          <h3 className='ride-info-text'>👪 &nbsp;Companion: {props.ride.companion}</h3>
          <h3 className='ride-info-text'>🎢 &nbsp;Ride type: {props.ride.ride_type}</h3>
          <h3 className='ride-info-text'>🙅 &nbsp;Best For: {props.ride.best_for}</h3>
          <h3 className='ride-info-text'>♿ &nbsp;Accessibility: {props.ride.accessibility}</h3>
          </div>
          <Link to={'/all/tickets'}>
            <button type="button" id="get-ticket-button">
              Get Tickets
            </button>
          </Link>
        </div>
      </div>
      <h4 id="ride-description">{props.ride.description}</h4>

    </div>
  )
}

export default Ride
