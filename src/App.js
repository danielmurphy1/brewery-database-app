import React, {useState, useEffect} from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import BreweryCard from "./BreweryCard";

function App() {
  const [names, setNames] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  // useEffect( async () =>{
  //   const data = await fetch("https://api.openbrewerydb.org/breweries").then(response => response.json());
  //   console.log(data)
  // }, [])

  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetch("https://api.openbrewerydb.org/breweries").then(response => response.json());
  //     const names = [];
  //     console.log(data)
  //     for(let i = 0; i < data.length; i++){
  //       setName(() => data[i].name)
  //       console.log(name)
  //     }
  //     // setName(() => data[0].name)
  //     //   console.log(name)
      
  //   }
  //   fetchData();
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://api.openbrewerydb.org/breweries").then(response => response.json());
      const places = [];
      console.log(data)
      for(let i = 0; i < data.length; i++){
      
          places.push(data[i].name)
          setNames([...names, places])
      
      
      // setName(() => data[0].name)
      //   console.log(name)
      
      }
      console.log(places)
    }
    fetchData();
  }, [])

//  function generateCard(){
//    let card = ""
//    for(let i = 0; i < names.length; i++){
//     card = <BreweryCard name={names[i]}/>
//    }
//    return card
//  }

  

  return (
    <div className="container-fluid">
      <SearchForm/>
      <BreweryCard name={names}/>
    </div>
  )
}

export default App;
