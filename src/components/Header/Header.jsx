import "./Header.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({isActive})  => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/browse-pokemon" className={({isActive})  => isActive ? "active" : ""}>Latest Set</NavLink>
          </li>
          <li>
            <NavLink to="/explore-sets" className={({isActive})  => isActive ? "active" : ""}>Explore sets</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})  => isActive ? "active" : ""}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header