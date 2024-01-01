// Sidebar.js
// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to='/'>Add Doctor</Link>
        </li>
        <li>
          <Link to="/">View Doctors</Link>
        </li>

        
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

