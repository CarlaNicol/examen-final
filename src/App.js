// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import LandingPage from './screens/LandingPage';
import LoginForm from './components/LoginForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');

  // Función que se llama después del inicio de sesión exitoso
  const handleLoginSuccess = (user, email) => {
    setUser(user);
    setEmail(email);
    setIsAuthenticated(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
        {/* Mostrar Navbar y LandingPage cuando el usuario esté autenticado */}
        {isAuthenticated ? (
          <>
            <Navbar user={user} email={email} />
            <LandingPage />
          </>
        ) : (
          // Mostrar formulario de inicio de sesión cuando no esté autenticado
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </Provider>
  );
}

export default App;
