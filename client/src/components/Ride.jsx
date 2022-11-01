import React from 'react'


const Ride = (props) => {
  console.log(props)
  return (<div>
    <h1>{props.ride.name}</h1>
    <h4>{props.ride.description}</h4>
    {props.ride.images.map((image)=>(
    <img src={image}  width="1000px" height="600px"/>
    ))}
  </div>)
}

export default Ride    
