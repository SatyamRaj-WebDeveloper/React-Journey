import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
const Login = () => {
  



  return (
    <>
    <div className='flex items-center justify-center bg-[url("https://images.unsplash.com/photo-1620231150904-a86b9802656a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-full h-screen bg-center bg-cover bg-blend-multiply sm:bg-center sm:bg-cover sm:h-screen bg-gray-500'>
      <div className='flex flex-col gap-8 bg-transparent p-6 h-96 items-center ring-1 ring-gray-400'>
        <div className='justify-center items-center flex max-w-fit max-h-fit p-6 bg-gray-400 rounded-full' >
        <FaUser className='w-20 h-20'/>
        </div>
      

        <input type="text" className='outline-none w-64 h-18 px-3 py-2 hover:ring-gray-400 bg-transparent hover:ring-1 text-white' placeholder='Enter Email'/>

        <input type="Password" className='outline-none w-64 h-18 px-3 py-2 hover:ring-gray-400 bg-transparent hover:ring-1 text-white' placeholder='Enter Password'/>
        <Link className='bg-white text-center text-md font-light w-64 h-10 p-2'>Log In</Link>
        
        </div>     
  
    </div>
    
    </>
  )
}

export default Login