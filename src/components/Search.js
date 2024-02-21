// components/Search.js
import React, { useState } from 'react';
import Card from './Card';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      // Fetch data from the Magic: The Gathering API based on the query
      const response = await fetch(`https://api.magicthegathering.io/v1/cards?name=${query}`);
      const data = await response.json();
      setSearchResults(data.cards);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          searchResults.map((card) => (
            <Card key={card.id} card={card} />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
