import React from 'react'
import { Link } from 'react-router-dom'

const Ride = (props) => {
  console.log(props)

  return (<div>
    <div id='ride-header'>
      {props.ride.images.map((image)=>(
        <img src={image} alt={props.ride.name} width="1000px" height="600px" id='ride-image'/>
      ))} 
      <div id='ride-text-container' > 
      <h1 id='ride-name' className='font-1' >{props.ride.name}</h1>
      <Link to={'/tickets'}>
        <button type="button" id="get-ticket-button">
          Get Tickets
        </button>
      </Link>
      </div>

    </div>

      <h4 id='ride-description'>{props.ride.description}</h4>
  </div>)
}

export default Ride
