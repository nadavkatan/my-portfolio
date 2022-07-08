import React, { useEffect } from 'react';
import './styles/styles.css'

const Navbar = ({setFocusedSection}) => {

  return (
    <div className="navbar-container">
    <ul className="navbar">
        <li className="nav-item" onClick={()=>setFocusedSection("Home")}>Home</li>
        <li className="nav-item" onClick={()=>setFocusedSection("Projects")}>Projects</li>
        <li className="nav-item" onClick={()=>setFocusedSection("About")}>About</li>
        <li className="nav-item" onClick={()=>setFocusedSection("Contact")}>Contact</li>
    </ul>
</div>
  )
}

export default Navbar