import React from 'react'

const Banner = ({image1, name, key}) => {

  return(
    <div className='banner-ride inline-snap' key={key}>
      <img src={image1} alt={name} id='img-banner' width="1550px" height="1000px"/>
    </div>
  )
}

 export default Banner
