import React, {useState, useEffect} from 'react';
import randomcolor from "randomcolor"
import './App.css';

function App() {
  const [ value, setValue ] = useState("Testing") 
    //- array of variable and function - convention is to name function for setting the variable - similar to useState()
    // - argument of useState is the initial state of the variable
  const [color, setColor] = useState("")
  console.log(color)


  useEffect(()=>{
    setColor(randomcolor())
  }, []) //empty array as second argument only runs when components mounts aka componentDidMount()

  useEffect(()=>{
    setColor(randomcolor())
  }, [value]) //second argument array value(s) are the variables it looks for change to run aka componentDidUpdate

  return (
    <div className="App">
      <h1 style={{color: color}}>{value}</h1>
      <button className="btn btn-danger" onClick={()=>setValue("Test Complete")
      }>Change</button>
      <button className = "btn btn-primary" onClick={()=>setValue("Testing")}>Change Back</button>
    </div>
  );
}

export default App;
