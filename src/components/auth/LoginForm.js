// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Replace with your backend URL

const LoginForm = ({ history }) => { // Receive history prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });
      console.log('Login successful. Response:', response.data);
      // Redirect user to the desired page (e.g., '/dashboard') after successful login
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Login form fields */}
    </form>
  );
};

export default LoginForm; // Wrap LoginForm with withRouter
