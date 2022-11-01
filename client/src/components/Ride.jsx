import React from 'react'

const Ride = (props) => {
  console.log(props)
<<<<<<< HEAD
  return (
    <div>
      <h1>{props.ride.name}</h1>
      <h4>{props.ride.description}</h4>
      {props.ride.images.map((image) => (
        <img src={image} width="1000px" height="600px" />
      ))}
    </div>
  )
=======
  return (<div>
    <div id='ride-header'>
      <h1 id='ride-name' className='font-1' >{props.ride.name}</h1>
      {props.ride.images.map((image)=>(
        <img src={image} alt={props.ride.name} width="1000px" height="600px" id='ride-image'/>
      ))} 
    </div>

      <h4 id='ride-description'>{props.ride.description}</h4>
  </div>)
>>>>>>> 292b9c563bbb1389bdcb4e705bf93ee28c7eb2b9
}

export default Ride
