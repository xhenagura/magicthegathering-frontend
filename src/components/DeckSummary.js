// DeckSummary.js
import React from 'react';

const DeckSummary = ({ deck }) => {
  const calculateAverageManaCost = () => {
    const nonLandCards = deck.filter(card => card.type !== "Land");
    if (nonLandCards.length === 0) return 0;
    
    const totalManaCost = nonLandCards.reduce((total, card) => total + parseInt(card.manaCost), 0);
    return totalManaCost / nonLandCards.length;
  };

  const averageManaCost = calculateAverageManaCost();

  return (
    <div>
      <h2>Deck Summary</h2>
      <p>Average Mana Cost (Non-Land): {averageManaCost}</p>
    </div>
  );
};

export default DeckSummary;
