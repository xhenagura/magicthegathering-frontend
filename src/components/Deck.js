// components/Deck.js
import React, { useContext } from 'react';
import { DeckContext } from '../context/DeckContext';

const Deck = () => {
  const { deck, averageManaCost } = useContext(DeckContext);

  return (
    <div>
      <h2>Deck</h2>
      <div>
        {deck.map((card) => (
          <div key={card.id}>{card.name}</div>
        ))}
      </div>
      <p>Average Mana Cost (Non-Land): {averageManaCost}</p>
    </div>
  );
};

export default Deck;
