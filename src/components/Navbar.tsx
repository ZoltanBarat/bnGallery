import React from 'react';
import { Link } from 'gatsby';
import './Navbar.css';
import logo from "../../static/logo.png";

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-container-left'>
        <img src={logo } className='logo-image' alt="BN Gallery logo"/>
      </div>
        <div className='navbar-container-right'>
          <Link to="/" className='nav-link'>
            Gallery
        </Link>
          <Link to="/about" className='nav-link'>
            About
        </Link>
          <Link to="/contact" className='nav-link'>
            Contact
          </Link>
      </div>
          
    </div>
  )
}