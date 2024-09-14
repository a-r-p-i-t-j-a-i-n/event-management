import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Event Management</Link>
        
        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-menu active' : 'desktop-menu'}`}>
          <li className="navbar-item">
            <Link to="/events" className="navbar-link">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/attendees" className="navbar-link">Attendees</Link>
          </li>
          <li className="navbar-item">
            <Link to="/notifications" className="navbar-link">Notifications</Link>
          </li>
          <li className="navbar-item">
            <Link to="/profile" className="navbar-link">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link navbar-button">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-link navbar-button">Signup</Link>
          </li>
          <li className="navbar-item">
            <button onClick={handleLogout} className="navbar-button">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
