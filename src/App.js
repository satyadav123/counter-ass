import logo from './logo.svg';
import './App.css';
import { useState } from "react";
function App() {
  const [counter,setCounter]=useState(0)

  return (
    <div className="App">
    <div>
      <h1  className={`${(counter%2===0 )? "even":"odd"}`}>COUNTER:{counter}</h1>
      <button onClick={()=>{
       setCounter(counter+1)
       console.log("clicked")
     }}>ADD</button>
      <button
      onClick={()=>{
        setCounter(counter-1)
        console.log("clicked")
      }}>SUB</button>
    </div>
   <button  onClick={()=>{
        setCounter(counter*2)
       
      }}>double</button> 
    </div>
  );
}

export default App;
