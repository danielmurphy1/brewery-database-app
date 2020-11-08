import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import BreweryCard from "./BreweryCard";

//useEffect with page dependecy fixes page state issue
//add zipcode search
//add functionality to disable next and previous buttons when applicable
//add "more info" button card to display more info modal

function App() {
  const [breweries, setBreweries] = useState([]);
  const [breweryName, setBreweryName] = useState("");
  const [breweryState, setBreweryState] = useState("");
  const [page, setPage] = useState(1);
  const [searchCondition, setSearchCondition] = useState("default"); 

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}`).then(response => response.json());
      setBreweries(data);
      console.log(page)
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
    }
  }, [page])

  function searchBreweryName(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch(`https://api.openbrewerydb.org/breweries?by_name=${breweryName}&page=${page}`).then(response =>response.json());
      setBreweries(data);
      //setBreweryName("");
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
      //setBreweryState("");
      setSearchCondition("state");
      setPage(1);
    }
    fetchData();
    console.log(breweryState)
  }
  
  function handleNameChange(e){
    setBreweryName(e.target.value);
    // setPage(1);
  }

  function handleStateChange(e){
    setBreweryState(e.target.value);
    //setPage(1);
  }

  function increasePage(){
    setPage(prevPage => prevPage + 1);
    console.log(breweryState)
    console.log(page)
    console.log(searchCondition)
    
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
        />
      <div className="row justify-content-around">
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;
