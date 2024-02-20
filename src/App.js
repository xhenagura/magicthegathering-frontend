import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/Dashboard'; // Import the Dashboard component

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} /> {/* Define route for dashboard */}
      </Routes>
    </div>
  );
};

export default App;
