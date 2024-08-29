// src/components/LogoutModal.js
import React from 'react';

const LogoutModal = ({ closeModal, confirmLogout }) => {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', position: 'relative', width: '300px', textAlign: 'center' }}>
        <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>X</button>
        <p>¿Estás seguro de que quieres cerrar sesión?</p>
        <button onClick={confirmLogout} style={{ padding: '8px 15px', backgroundColor: '#e7e7e7', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}>Presionar para salir!!!</button>
      </div>
    </div>
  );
};

export default LogoutModal;
