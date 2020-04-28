import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/Searchbar.js'
import Header from './layout/Header';
import Soundbites from './components/Soundbites';

function App() {

  const [search] = useState();
  const result = (search ? getData(search) : [])
  
  useEffect(() => {
    console.log(search);
    
  })

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Soundbites data={result} />
    </div>
  );
}


export default App;

function getData(searchArgument) {
  console.log("argument is: " + searchArgument)
  const initialData = [{
    "id": 1,
    "keyword": "Aap",
    "url": "https://www.apenheul.nl",
    "description": "Fijn een dagje weg naar de apenheul"
  }];
  return initialData;

}