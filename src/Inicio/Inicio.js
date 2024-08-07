import React, { useState } from 'react';

const InicioSesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Lógica de registro
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleLogin = () => {
    // Lógica de inicio de sesión
    console.log('Iniciar sesión con Usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div style={styles.container}>
      <h2>Inicio de Sesión</h2>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </div>
      <div>
        <button onClick={handleLogin} style={styles.button_Inicio}>
            Inicio sesión
        </button>
      </div>
      <button onClick={handleRegister} style={styles.button}>
        Registrarse
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '0 auto'
  },
  inputContainer: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#fb8500',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  button_Inicio: {
    padding: '10px 20px',
    backgroundColor: '#fb8500',
    color: '#fff',
    border: 'none',
    marginbottom:'100%',
    borderRadius: '5px',
    cursor: 'pointer'
  },
};

export default InicioSesion;
