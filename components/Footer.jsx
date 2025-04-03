import React from "react";
import './styles/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Our Mission</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Emergency Care</a>
            </li>
            <li>
              <a href="#">Medical Checkups</a>
            </li>
            <li>
              <a href="#">Surgical Procedures</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="#">+1 234 567 890</a>
            </li>
            <li>
              <a href="#">info@hospital.com</a>
            </li>
            <li>
              <a href="#">Find Us</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Follow Us</h4>
          <div className="socialIcons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footerCopyright">
        © 2025 Your Hospital. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
