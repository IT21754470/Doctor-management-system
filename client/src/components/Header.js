// Header.js
import React from 'react';
import '../css/Header.css'; // Import your header CSS
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="app-header">
      {/* Your header content goes here */}
      <h1>Your App Name</h1>
      <nav className="nav-bar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
       
    </header>
  );
}

export default Header;
