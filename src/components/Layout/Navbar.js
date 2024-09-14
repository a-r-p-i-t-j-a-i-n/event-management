import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Event Management</Link>
        <ul className="navbar-menu">
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
        </ul>
        <div className="navbar-buttons">
          <Link to="/login" className="navbar-button">Login</Link>
          <Link to="/register" className="navbar-button">Signup</Link>
          <button onClick={handleLogout} className="navbar-button">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
