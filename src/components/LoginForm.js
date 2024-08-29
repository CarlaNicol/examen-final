// src/components/LoginForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import LogoutModal from './LogoutModal';

const LoginForm = ({ onLoginSuccess }) => {  // Recibe onLoginSuccess como prop
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === 'mod7ReactUSIP') {
      dispatch({
        type: 'SET_FORM_DATA',
        payload: { user, email, password }
      });
      setError('');
      onLoginSuccess(user, email);  // Llama a la función onLoginSuccess con user y email
    } else {
      setError('Password incorrecto');
      dispatch({ type: 'RESET_FORM_DATA' });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogout = () => {
    setShowModal(true); // Mostrar el modal al hacer clic en Logout
  };

  const confirmLogout = () => {
    setUser('');
    setEmail('');
    setPassword('');
    setShowModal(false);
    dispatch({ type: 'RESET_FORM_DATA' }); // Resetear datos en Redux
  };

  const closeModal = () => {
    setShowModal(false); // Cerrar el modal sin hacer nada
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: '#f0f2f5' }}>
        <div style={{ width: '400px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ marginBottom: '50px', fontWeight: 'bold', fontSize: '25px' }}>Login Form</h2>
          <div style={{ marginBottom: '10px', fontSize: '14px', textAlign: 'center' }}>
            <strong>Username:</strong> {user}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <label style={{ fontWeight: 'normal', marginRight: '10px', flex: '1', textAlign: 'right', fontSize: '14px' }}>Username:</label>
              <input 
                type="text" 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
                required 
                style={{ flex: '3', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <label style={{ fontWeight: 'normal', marginRight: '10px', flex: '1', textAlign: 'right', fontSize: '14px' }}>Email:</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ flex: '3', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
              />
            </div>
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <label style={{ fontWeight: 'normal', marginRight: '10px', flex: '1', textAlign: 'right', fontSize: '14px' }}>Password:</label>
              <input 
                type={showPassword ? 'text' : 'password'}
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ flex: '2.5', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
              />
              <button 
                type="button" 
                onClick={toggleShowPassword} 
                style={{ marginLeft: '0px', padding: '6px 10px', fontSize: '12px', cursor: 'pointer' }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button type="submit" style={{ width: '35%', padding: '8px', backgroundColor: '#e7e7e7', color: '#333', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'normal', marginTop: '10px' }}>Submit</button>
              <button type="button" onClick={handleLogout} style={{ marginLeft: '10px', background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', fontSize: '14px', marginTop: '10px' }}>Logout</button>
            </div>
          </form>
          {error && <div style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>{error}</div>}
        </div>
      </div>

      {/* Modal para confirmar logout */}
      {showModal && (
        <LogoutModal closeModal={closeModal} confirmLogout={confirmLogout} />
      )}
    </div>
  );
};

export default LoginForm;
