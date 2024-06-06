import React, { useState } from 'react';
import './App.css';

function App() {

  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  return (
    <div className="App">
      <h1>XDictionary</h1>
      <div>
        <input
          id="search-input"
          type='text'
          placeholder='Search for a word...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button id="search-button" onClick={handleSearch}>Search</button>
      </div>
      <div>
        <p>Definition:</p>
        <p id="definition">{definition}</p>
      </div>
    </div>
  );
}

export default App;
