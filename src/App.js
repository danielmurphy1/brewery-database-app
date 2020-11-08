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
  const [searchCondition, setSearchCondition] = useState("default"); 

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}`).then(response => response.json());
      setBreweries(data);
    }
    fetchData();
  }, [])

  useEffect(() => {
    if(searchCondition === "default"){
      async function fetchData() {
        const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}`).then(response => response.json());
        setBreweries(data);
      }
      fetchData();
    } else if (searchCondition === "name"){
      async function fetchData(){
        const data = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${breweryName}&page=${page}`).then(response =>response.json());
        setBreweries(data);
      }
      fetchData();
    } else if (searchCondition ==="state"){
      async function fetchData(){
        const data = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${breweryState}&page=${page}`).then(response =>response.json());
        setBreweries(data);
      }
      fetchData();
    } else if (searchCondition ==="city"){
      async function fetchData(){
        const data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${breweryCity}&page=${page}`).then(response =>response.json());
        setBreweries(data);
      }
      fetchData();
    }
  }, [page])

  function searchBreweryName(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${breweryName}&page=${page}`).then(response =>response.json());
      setBreweries(data);
      setSearchCondition("name");
      setPage(1);
    }
    fetchData();
  }

  function searchBreweryState(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_state=${breweryState}&page=${page}`).then(response =>response.json());
      setBreweries(data);
      setSearchCondition("state");
      setPage(1);
    }
    fetchData();
  }

  function searchCityName(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${breweryCity}&page=${page}`).then(response =>response.json());
      setBreweries(data);
      setSearchCondition("city");
      setPage(1);
    }
    fetchData();
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
