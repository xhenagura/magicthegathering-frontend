// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DeckProvider } from './context/DeckContext';
import Search from './components/Search';
import Deck from './components/Deck';
import './index.css'; // Import your index.css file


const App = () => {
  return (
    <DeckProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/deck" element={<Deck />} />
        </Routes>
      </Router>
    </DeckProvider>
  );
};

export default App;
