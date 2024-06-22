import React from 'react'
import { useState } from 'react'
function Todolist({
   Todo,
   click,
}) {


  return (


    <>
    <div className={({isActive})=>{
        
        `${isActive ? "flex" : "hidden"} `
    }}>
       <li className='text-white list-none '>{Todo}</li>
       <button className='text-white m-1 px-3 py-1 bg-purple-500 '>Delete</button>
       <button className='text-white m-1 px-3 py-1 bg-purple-500 '> Edit</button>
    </div>
    
    </>
  )
}

export default Todolist