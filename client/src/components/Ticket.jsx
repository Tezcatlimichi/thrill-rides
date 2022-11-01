import React from 'react'

const Ticket = ({rideName, price}) => {
  return( 
  <div>
    <h3>{rideName}</h3>
    <h4>{price}</h4>
  </div>
  )
}

export default Ticket
