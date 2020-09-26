import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import BreweryCard from "./BreweryCard";

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
    
  }

  function decreasePage(){
    setPage(prevPage => prevPage - 1);
    console.log(page)
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
    
  }


  //psuedocode for pagination
  /* 
  -create buttons in Form
  -create page state in App
  -write functions for increasing and decreasing page
  -write useEffect() that fetches relevant data when page is changed - second argument of useEfect is [page]
   */

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
        <div>{page}</div>
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;
