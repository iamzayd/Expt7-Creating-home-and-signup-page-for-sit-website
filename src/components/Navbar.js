import React from 'react';
import '../style/Navbar.css'; 
import logo from '../assets/sit logo.png'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className='nav-logo-img' /> 
      </div>
      <div className="nav-links">
        <a href="/Home">Home</a>
        <a href="/Login">Sign Up</a>
      </div>
    </nav>
  )
}
