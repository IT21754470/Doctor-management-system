// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar2.css';

const Sidebar2 = () => {
  return (
    <div className="sidebar2">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar2;
