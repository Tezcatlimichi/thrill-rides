import React from 'react'



const Featured = ({ride}) => {


  return(
    <div className='featured-ride' >

      
        <h3 className='featured-name'>{ride.name}</h3>
        <img src={ride.images} alt={ride.name} id='featured-image' width="1000px" height="600px"/>
    </div>
  )
}

export default Featured
