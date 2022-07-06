import React from 'react';
import './styles/styles.css'

const Navbar = () => {


  return (
    <div className="navbar-container">
        <ul className="navbar">
            <li className="nav-item"><a href="#Home" style={{textDecoration: 'none', color: 'white'}}>Home</a></li>
            <li className="nav-item"><a href="#Projects" style={{textDecoration: 'none', color: 'white'}}>Projects</a></li>
            <li className="nav-item"><a href="#About" style={{textDecoration: 'none', color: 'white'}}>About</a></li>
            <li className="nav-item"><a href="#Contact" style={{textDecoration: 'none', color: 'white'}}>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar