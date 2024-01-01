
import React, { useState } from 'react';
import "../css/Login.css";
import '../css/Layout.css'; 
import Sidebar2 from './Sidebar2';

const Login = () => {
  const [doctorId, setDoctorId] = useState('');
  const [name, setName] = useState('');

  const authorizedDoctors = [
    { id: '1', name: 'S.Wijesekara' },
    { id: '2', name: 'A.Samarakoon' },
    { id: '3', name: 'M.Rathnayaka' },
    { id: '4', name: 'I.Samarakkodi' },
    { id: '5', name: 'T.Samarasinghe' },
    { id: '7', name: 'G.G.A.Kaushalya' },
    // Add more authorized doctors here
  ];
  
  const handleLogin = () => {
    const authDoctor = authorizedDoctors.find((doc) => doc.id === doctorId && doc.name === name);

    if (authDoctor) {
      // Successfully authenticated, you can redirect or set a session/token here
      alert('Login successful!');
    } else {
      // Authentication failed
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="layout">
      {/* Sidebar */}
      <Sidebar2 />
    
    <div className="login-container">
    <div className="content">
      <h2>Login</h2>
      <label htmlFor="doctorId">Doctor ID:</label>
      <input
        type="text"
        id="doctorId"
        name="doctorId"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </div>
  );
};

export default Login;
