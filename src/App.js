import React from 'react';
import './App.css';
import SearchBar from './components/Searchbar.js'
import Header from './layout/Header';
import Data from './data/data.json';
import Soundbites from './components/Soundbites';

function App() {

  const results = Data;
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Soundbites data={results} />
      
    </div>
  );
}

export default App;
