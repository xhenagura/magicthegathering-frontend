import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';


const Dashboard = () => {

    const [searchResults, setSearchResults] = useState([]);

    // Callback function to receive search results from SearchBar component
    const handleSearchResults = (results) => {
      setSearchResults(results);
    };
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>You are logged in.</p>

      <SearchBar onSearch={handleSearchResults} />
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((card) => (
          <li key={card.id}>
            {card.name} - {card.type}
          </li>
        ))}
      </ul>
      {/* Links to login and register */}
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Dashboard;
