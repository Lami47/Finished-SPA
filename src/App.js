import React from 'react';
// import './NavBar.css'; // Optional: import your CSS file
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NavBar from './Components/Navbar.js';

function App() {
    return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/userprofile" element={<UserProfile/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/registration" element={<Registration/>} />
          </Routes>
      </BrowserRouter>
    );
  };

export default App
