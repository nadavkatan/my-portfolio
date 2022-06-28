import React from 'react';
import './styles/styles.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <ul className="navbar">
            <li className="nav-item">Home</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar