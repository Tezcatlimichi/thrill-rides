import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className = "nav-container">
        <div id='nav-content'>  
            <Link to ={`/`}><img src="/images/logo.png" alt="website logo" className='logo'/></Link>
            <div id='links-container'>
                <NavLink to = '/' className="nav-link">Home</NavLink>
                <NavLink to = '/rides' className="nav-link">Best Rides</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Nav
