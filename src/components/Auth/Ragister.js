import React, { useState } from 'react';
import api from '../utils/api'; // Assuming api.js contains the axios instance you provided

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/users/register', { name, email, password });
      setSuccess('Registration successful!'); // Show success message
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message); // Set error from backend
      } else {
        setError('Error registering user. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
      {success && <p style={{ color: 'green' }}>{success}</p>}  {/* Display success message */}

      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
