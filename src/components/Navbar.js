// src/components/Navbar.js
import React from 'react';

const Navbar = ({ user, email }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Product</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Forms</a>
      </div>
      <div>
        Bienvenido {user}: {email}
        
      </div>
    </nav>
  );
};

export default Navbar;
