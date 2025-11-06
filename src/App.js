import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./Components/SearchForm";
import BreweryCard from "./Components/BreweryCard";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [breweryName, setBreweryName] = useState("");
  const [breweryState, setBreweryState] = useState("");
  const [breweryCity, setBreweryCity] = useState("");
  const [page, setPage] = useState(1);
  const [searchCondition, setSearchCondition] = useState({type: "initialRender"}); 

useEffect(() => {
    if (searchCondition.type === "initialRender")
    fetch(`https://api.openbrewerydb.org/v1/breweries?page=${page}`)
    .then(response => response.json())
    .then(breweries => setBreweries(breweries));
  }, [page])

useEffect(() => {
  if (searchCondition.type === "name"){
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${breweryName}&page=${page}`)
    .then(response =>response.json())
    .then(breweries =>setBreweries(breweries));
  } 
}, [page, searchCondition])

useEffect(() => {
  if (searchCondition.type === "state"){
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=${breweryState}&page=${page}`)
    .then(response =>response.json())
    .then(breweries =>setBreweries(breweries));
  } 
}, [page, searchCondition])

  useEffect(() => {
    if (searchCondition.type ==="city"){
      fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${breweryCity}&page=${page}`)
      .then(response =>response.json())
      .then(breweries => setBreweries(breweries));
      }
  }, [page, searchCondition])

  function searchBreweryName(e){
    e.preventDefault();
    setSearchCondition({type: "name", breweryName});
    setPage(1);
    }

  function searchBreweryState(e){
    e.preventDefault();
    setSearchCondition({type: "state", breweryState});
    setPage(1);
  }

  function searchCityName(e){
    e.preventDefault();
    setSearchCondition({type: "city", breweryCity});
    setPage(1);
  }
  
  function handleNameChange(e){
    setBreweryName(e.target.value);
  }

  function handleStateChange(e){
    setBreweryState(e.target.value);
  }

  function handleCityChange(e){
    setBreweryCity(e.target.value);
  }

  function increasePage(){
    setPage(prevPage => prevPage + 1);
  }

  function decreasePage(){
    setPage(prevPage => prevPage - 1); 
  }

  return (
    <div className="container-fluid">
      <SearchForm 
        breweryName={breweryName} 
        searchBreweryName={searchBreweryName} 
        handleNameChange={handleNameChange} 
        breweryState={breweryState} 
        searchBreweryState={searchBreweryState} 
        handleStateChange={handleStateChange}
        increasePage={increasePage}
        decreasePage={decreasePage}
        breweries={breweries}
        page={page}
        handleCityChange={handleCityChange}
        breweryCity={breweryCity}
        searchCityName={searchCityName}
        />
      <div className="row justify-content-around">
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;