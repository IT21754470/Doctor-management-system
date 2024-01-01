// Layout.js
// Layout.js

import React from 'react';
import Sidebar from './Sidebar';
import Sidebar2 from './Sidebar2';
import '../css/Layout.css'; 
import '../css/Sidebar2.css'; 
import Header from './Header'; 
import '../css/Header.css'; 



function Layout({ children }) {
  return (
   
    <div className="app-layout">
      
      <Sidebar2/>
      <Sidebar />
      <div className="content">
      
        {children}</div>

      
    </div>
  );
}

export default Layout;

