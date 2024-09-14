import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/events" className="sidebar-link">Events</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/attendees" className="sidebar-link">Attendees</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/notifications" className="sidebar-link">Notifications</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/profile" className="sidebar-link">Profile</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
