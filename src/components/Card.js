// components/Card.js
import React, { useContext } from 'react';
import { DeckContext } from '../context/DeckContext';

const Card = ({ card }) => {
  const { addToDeck } = useContext(DeckContext);

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{card.name}</h3>
        <p className="card-text">Mana Cost: {card.manaCost || 'N/A'}</p>
        {/* You can display other card information here if needed */}
        <button className="add-button" onClick={() => addToDeck(card)}>Add to Deck</button>
      </div>
    </div>
  );
};

export default Card;
