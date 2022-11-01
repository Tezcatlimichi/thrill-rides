import React from 'react'

const Ride = (props) => {
  return (
    <div>
      <h1>{props.ride.name}</h1>
      <h4>{props.ride.description}</h4>
    </div>
  )
}

export default Ride
