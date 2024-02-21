// context/DeckContext.js
import React, { createContext, useState, useEffect } from 'react';

const DeckContext = createContext();

const DeckProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [averageManaCost, setAverageManaCost] = useState(0);

  useEffect(() => {
    // Calculate the average mana cost of non-land cards in the deck
    const nonLandCards = deck.filter((card) => card.type !== 'Land');
    const totalManaCost = nonLandCards.reduce((total, card) => total + card.cmc, 0);
    const avgManaCost = nonLandCards.length > 0 ? totalManaCost / nonLandCards.length : 0;
    setAverageManaCost(avgManaCost);
  }, [deck]);

  const addToDeck = (card) => {
    console.log(card)
    if (deck.length < 30) {
      setDeck([...deck, card]);
    } else {
      alert('Maximum deck size reached!');
    }
  };

  const removeFromDeck = (cardId) => {
    const updatedDeck = deck.filter((card) => card.id !== cardId);
    setDeck(updatedDeck);
  };

  return (
    <DeckContext.Provider value={{ deck, addToDeck, removeFromDeck, averageManaCost }}>
      {children}
    </DeckContext.Provider>
  );
};

export { DeckContext, DeckProvider };
