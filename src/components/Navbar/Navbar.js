import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navbar__item"><a href="/" className='link link--nav'>projects</a></li>
        <li className="navbar__item"><a href="/" className='link link--nav'>skills</a></li>
        <li className="navbar__item"><a href="/" className='link link--nav'>contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar