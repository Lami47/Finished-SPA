import React from 'react';
// import './NavBar.css'; // Optional: import your CSS file
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NavBar from './components/NavBar.js';
import Menu from './pages/Menu.js';

function App() {
    return (
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/menu" element={<Menu/>} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/user-profile" element={<UserProfile/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/registration" element={<Registration/>} />
          </Routes>
      </BrowserRouter>
    );
  };

export default App
