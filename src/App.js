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
      // for(const brewery of data){
      //   console.log(brewery)
      //   setBreweries([...breweries, brewery]);
      // }
      setBreweries(data)
      
      
    }
    fetchData();
  }, [])

  console.log(breweries)
  

  return (
    <div className="container-fluid">
      <SearchForm/>
      <div className="row justify-content-around">
        
          {breweries.map(b => <BreweryCard key={b.id} breweries={b}/>)}
        
      </div>
    </div>
  )
}

export default App;
