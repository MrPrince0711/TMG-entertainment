import { useState } from 'react'
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleClick = () => {
      setMenuOpen(!menuOpen);

      console.log('clicked')
    }


  return (
    <div className='navbar' id='navBar'>
        <Link to = '/'>
          <img className='nav_logo' src= {require('./images/tmgeLogo.jpg')}/> 
        </Link>

        <div className="menu" onClick = {handleClick} >
          <span className='burger'></span>
          <span className='burger'></span>
          <span className='burger'></span>
        </div>

        <div className="navbar_menu">
            <div className= { menuOpen ? "open ": '' } >
              <Link to = '/team'>
              <h2 className='team_nav'>Team</h2>
              </Link>

              <Link to = '/portfolio'>
              <h2 className='port_nav'>Portfolio</h2>
              </Link>

              <Link to = '/contact'>
              <h2 className='contact_nav'>Contact</h2>
              </Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar