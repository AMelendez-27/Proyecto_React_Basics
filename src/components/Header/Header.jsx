import "./Header.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon-by-name">Pokemon por name</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon-by-id">Pokemon por id</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header