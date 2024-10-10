// src/NavBar.js
import React from 'react';
import './Navbar.css'; // Optional: import your CSS file
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='NavBar'>
        <nav>
            <Link to="/" id='home'>Home</Link>
            <Link to="/about" id='about'>About</Link>
            <Link to="/userProfile" id='userprofile'>UserProfile</Link>
            <Link to="/login" id='login'>Login</Link>
            <Link to="/registration" id='registration'>Registration</Link>
        </nav>
    </div>
  );
};

export default NavBar;