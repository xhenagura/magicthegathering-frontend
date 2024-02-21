// CardList.js
import React, { useEffect, useState } from 'react';
import { fetchCards } from './services/cardService';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCards = await fetchCards(10); // Fetch 10 cards
      setCards(fetchedCards);
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  const addToDeck = (card) => {
    // Implement logic to add the card to the deck
    console.log('Adding card to deck:', card);
  };
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <div>{card.name}</div>
            <div>{card.type}</div>
            <div>Mana Cost: {card.manaCost}</div>
            <button onClick={() => addToDeck(card)}>Add to Deck</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
