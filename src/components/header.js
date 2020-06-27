import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='weather_header'>
      <div id='logo'>
        <h1>Weather App</h1>
      </div>
      <div id='navigation'>
        <nav>
          <ul>
            <li><NavLink to='/' exact activeClassName='selected'>Home</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
