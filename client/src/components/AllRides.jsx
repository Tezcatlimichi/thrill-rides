import React from 'react'

const AllRides = ({key, name, image}) => {
  return (
    <div className='rides-container' key={key}>
        <h3 className='rides-names'>{name}</h3>
        <img src={image} alt={name} id='rides-images'/>
    </div>
  )
}

export default AllRides
