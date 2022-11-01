import React from 'react'

const Featured = ({key, name, image}) => {
  return(
    <div className='featured-ride' key={key}>
        <h3 className='featured-name'>{name}</h3>
        <img src={image} alt={name} id='featured-image'/>
    </div>
  )
}

export default Featured
