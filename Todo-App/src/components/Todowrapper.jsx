import React from 'react'
import { useState } from 'react'
import Todolist from './Todolist'




function Todowrapper({addTodo}) {
    const [value,setvalue] = useState('')
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(value)
        setvalue("")
    }
   
    
  return (
    <>
    <div className='max-w-lg max-h-fit p-5  bg-blue-900 text-center'>
        <h2 className='text-2xl font-medium m-4 text-white' >Todo-App</h2>
    <form action="" className='' onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>{            
            setvalue(e.target.value)} }
value={value}
             
            placeholder='What is the Task Today?' className='px-3 py-2 bg-transparent ring-2 ring-blue-800  w-80 outline-none text-white'/>
        <button type='submit' className='w-fit h-fit px-3 py-2 bg-purple-500 ring-2 ring-blue-800   text-white'>ADD TASK</button>
    </form>


    </div>
   
    </>
  )
}

export default Todowrapper