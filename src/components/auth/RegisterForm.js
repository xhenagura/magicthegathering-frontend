// RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Replace with your backend URL

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, {
        name,
        email,
        password,
      });
      console.log('Registration successful. Response:', response.data);
      // Optionally, handle success (redirect, display message, etc.)
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally, handle error (display message, etc.)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm; // Export RegisterForm as the default export
