// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#4A90E2",
        height: "100px",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "0 20px"
      }}
    >
      {/* Left Section: Logo */}
      <div style={{ flex: 1 }}>
        <Link to="/">
          <img 
            src={logo} 
            alt="Clinic Logo" 
            style={{ height: "60px", width: "auto" }} // Adjust size as needed
          />
        </Link>
      </div>
      
      {/* Center Section: Navigation Links */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", margin: "0 15px" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ color: "white", textDecoration: "none", margin: "0 15px" }}
        >
          About Us
        </Link>
        <Link
          to="/our-services"
          style={{ color: "white", textDecoration: "none", margin: "0 15px" }}
        >
          Our Services
        </Link>
        <Link
          to="/contact"
          style={{ color: "white", textDecoration: "none", margin: "0 15px" }}
        >
          Contact Us
        </Link>
      </div>
      
      {/* Right Section: Login and Logout Buttons */}
      <div style={{ flex: 1, textAlign: "right" }}>
      <Link 
  to="/login" 
  style={{ 
    backgroundColor: "#fff", 
    color: "#4A90E2", 
    padding: "8px 16px", 
    borderRadius: "5px", 
    textDecoration: "none", 
    fontWeight: "bold",
    transition: "0.3s",
    border: "2px solid #4A90E2",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = "#4A90E2"; 
    e.target.style.color = "#fff"; // Change text to white
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = "#fff"; 
    e.target.style.color = "#4A90E2"; // Change text back to blue
  }}
>
  Login/Sign Up
</Link>

      </div>
    </nav>
  );
}

export default NavBar;
