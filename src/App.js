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
      //const places = [];
      // for(const brewery of data){
      //   console.log(brewery)
      //   setBreweries([...breweries, brewery]);
      // }
      setBreweries(data);
      
      
    }
    fetchData();
  }, [])

  console.log(breweries)
  
  function searchBreweryName(e){
    e.preventDefault();
    async function fetchData(){
      const data = await fetch("https://api.openbrewerydb.org/breweries/search?query="+{breweryName}).then(response =>response.json());
      setBreweries(data);
    }
    fetchData();
    
    setBreweryName("");

  }

  
    useEffect(() =>{
      function handleNameChange(e){
        setBreweryName(e.target.value);
      }
    }, [breweryName])
  

  return (
    <div className="container-fluid">
      <SearchForm breweryName={breweryName} searchBreweryName={searchBreweryName} handleNameChange={useEffect}/>
      <div className="row justify-content-around">
        
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;
