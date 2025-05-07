import React, { useState } from "react";
import "./styles/NavBar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, getUserRole, logOut } from "../utils/auth";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>NOVA HEALTH</h1>
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/specialities">Specialities</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/medicines">Medicines</Link></li>
        </ul>

        <div className="auth-buttons">
          {!isLoggedIn() ? (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/register" className="btn">Register</Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="btn">Logout</button>
              {getUserRole() === "doctor" && (
                <Link to="/doctorDashboard" className="btn dashboard">Dashboard</Link>
              )}
              {getUserRole() === "guest" && (
                <Link to="/patientDashboard" className="btn dashboard">Dashboard</Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
