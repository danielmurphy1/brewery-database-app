import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import BreweryCard from "./BreweryCard";

function App() {
  const [breweries, setBreweries] = useState([]);
 

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.openbrewerydb.org/breweries").then(response => response.json());
      //const places = [];
      for(const brewery of data){
        console.log(brewery)
        setBreweries([...breweries, brewery]);
      }
      
      console.log(breweries)
      
    }
    fetchData();
  }, [])

  

  return (
    <div className="container-fluid">
      <SearchForm/>
      <BreweryCard breweries={breweries}/>
    </div>
  )
}

export default App;
