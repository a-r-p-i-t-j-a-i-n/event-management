import React, { useState } from 'react';
import api from '../utils/api'; // Import the api utility

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/users/login', { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        window.location.href = '/';
      })
      .catch(error => console.error('Error logging in:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
