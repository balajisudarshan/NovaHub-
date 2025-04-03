import React, { useState } from 'react';
import './styles/NavBar.css';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="logo">
        <h1>NOVA HEALTH</h1>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='#'>Doctors</a></li>
          <li><a href='#'>Specialities</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>About Us</a></li>
        </ul>
      </div>
      <div className="loginRegisterBtn">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}

export default NavBar;