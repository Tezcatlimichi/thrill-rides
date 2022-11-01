import React from 'react'

const AllRides = ({key, name, image}) => {
  return (
      <div className='rides-container' key={key}>
          <h3 className='rides-names'>{name}</h3>
          <img src={image} alt={name} className='rides-images' width="1000px" height="600px"/>
      </div>
  )
}

export default AllRides
