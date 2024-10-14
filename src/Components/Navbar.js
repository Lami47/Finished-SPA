// src/NavBar.js
import React,{useEffect} from 'react';
import './Navbar.css'; // Optional: import your CSS file
import { Link } from 'react-router-dom'
import userData from '../usersData';

function NavBar() {
  
  useEffect(()=>{
    const storedUsername = localStorage.getItem('username');
  if (storedUsername === userData.username) {
  return(
    <div className='NavBar'>
          <nav>
              <Link to="/" id='home'>Home</Link>
              <Link to="/about" id='about'>About</Link>
              <Link to="/userProfile" id='userprofile'>UserProfile</Link>
              {/* <Link to="/" id='logout'>Logout</Link> */}
          </nav>
      </div>
  )}
  else {
    return(
    <div className='NavBar2'>
          <nav>
              <Link to="/login" id='login'>Login</Link>
              <Link to="/" id='home'>Home</Link>
              <Link to="/about" id='about'>About</Link>
              <Link to="/userProfile" id='userprofile'>UserProfile</Link>
              <Link to="/registration" id='registration'>Registration</Link>
          </nav>
      </div>
  )}
})
}

export default NavBar;