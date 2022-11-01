import React from 'react'


const Ride = (props) => {
  console.log(props)
  return (<div>
    <div id='ride-header'>
      <h1 id='ride-name'>{props.ride.name}</h1>
      {props.ride.images.map((image)=>(
        <img src={image} alt={props.ride.name} width="1000px" height="600px" id='ride-image'/>
      ))}
    </div>
      <h4 id='ride-description'>{props.ride.description}</h4>
  </div>)
}

export default Ride    
