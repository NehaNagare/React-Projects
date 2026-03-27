
import { useState } from 'react';
import './App.css'
import CounterApp from './CounterApp';

function App() {
  let name = "Neha"
  let count = 0;
const [ucount, setUcount] = useState(0);
  const handleClick = () => {
    count++;
    setUcount(ucount + 1)
    console.log("count = " + count + " --- u count = " + ucount)
  
  }
   return (
    <>
      <center>
        <h1>Welcome to Event State Intro... Miss. {name}</h1>

        <CounterApp/>


      </center>
    </>
  )
}


export default App
