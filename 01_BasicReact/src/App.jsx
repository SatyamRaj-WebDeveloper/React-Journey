import { useState } from "react"


function App() {

  // let counter  = 0;
  let [counter,setcounter] =  useState(0);
  let addValue = ()=>{
    if(counter === 20)
      setcounter = 0 
    else
    setcounter(counter+1)
  }

  let decrementValue = ()=>{
    if(counter === 0){
      setcounter= 0
    }else{
      setcounter(counter-1)
    }
    
  }
 
  return (
    <>
  <h1>Hello world this Is Satyam Raj </h1>
  <h2>Counter : {counter}</h2>
    <button onClick={addValue}>Increment</button>
    <button onClick={decrementValue}>Decrement</button>
    </>
  )
}

export default App
