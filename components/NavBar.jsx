import React, { useState } from 'react';
import './styles/NavBar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className="logo">
       <Link to="/"><h1>NOVA HEALTH</h1></Link> 
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/specialities">Specialities</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
        </ul>
      </div>
      <div className="loginRegisterBtn">
        <button >Login</button>
        <button ><Link to="/register">Register</Link></button>

      </div>
    </nav>
  );
};

export default NavBar;
