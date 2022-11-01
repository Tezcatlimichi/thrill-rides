import React from 'react'

const Ride = (props) => {
  console.log(props)

  return (<div>
    <div id='ride-header'>
      <h1 id='ride-name' className='font-1' >{props.ride.name}</h1>
      <img src={props.ride.image2} alt={props.ride.name} width="1000px" height="600px" id='ride-image'/>
    </div>

      <h4 id='ride-description'>{props.ride.description}</h4>
  </div>)

}

export default Ride
