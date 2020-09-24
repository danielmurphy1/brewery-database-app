import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import BreweryCard from "./BreweryCard";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [breweryName, setBreweryName] = useState("");
  const [breweryState, setBreweryState] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.openbrewerydb.org/breweries").then(response => response.json());
      setBreweries(data); 
    }
    fetchData();
  }, [])

  
  
  function searchBreweryName(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${breweryName}`).then(response =>response.json());
      setBreweries(data);
      setBreweryName("");
    }
    fetchData();
  }

  function searchBreweryState(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${breweryState}`).then(response =>response.json());
      setBreweries(data);
      setBreweryState("");
    }
    fetchData();
  }
  

  function handleNameChange(e){
    setBreweryName(e.target.value);
  }

  function handleStateChange(e){
    setBreweryState(e.target.value);
  }

  return (
    <div className="container-fluid">
      <SearchForm 
        breweryName={breweryName} 
        searchBreweryName={searchBreweryName} 
        handleNameChange={handleNameChange} 
        breweryState={breweryState} 
        searchBreweryState={searchBreweryState} 
        handleStateChange={handleStateChange}/>
      <div className="row justify-content-around">
        
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;
