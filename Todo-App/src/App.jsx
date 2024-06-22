import Todowrapper from "./components/Todowrapper"
import { useState } from "react"

function App() {
  const [todos,settodos]= useState([])
  const addTodo = (todo)=>{
     settodos([...todos , {
      task:todo ,completed:false,
      isEditing:false,
     }]
   
    )
    console.log(todos)
  }

  return (
    <>
    <div className="w-full h-screen bg-purple-500 grid place-content-center">
 <Todowrapper addTodo={addTodo}/>
    </div>
    </>
  )
}

export default App
