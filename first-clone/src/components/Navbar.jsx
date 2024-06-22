import React, { useState } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import '../slidingbtn.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
 const [isActive,setisActive]= useState(false)

 const toggleActive=()=>{
     setisActive(!isActive)
 }

  return (
   <>
   <div className='w-full relative  items-center '>
<div>
    
</div>

     <div className='sm:flex justify-evenly  items-center  max-w-auto h-fit mt-12 hidden gap-4  border-b-2 pb-5' >
     <Link to="" className='font-bold tracking-widest text-2xl '>RAWG</Link>

<ul className='flex gap-8 max-w-fit '>
    <li><Link to="whyRAWG" className='text-lg underline-link'>Why RAWG API</Link></li>
    <li><Link to="Pricing" className='text-lg underline-link'>Pricing</Link></li>
    <li><Link to="Terms" className='text-lg underline-link'>Terms</Link></li>
    <li><Link to="Updates" className='text-lg underline-link'>Updates</Link></li>
    <li><Link to="USe Cases" className='text-lg underline-link'>Use Cases</Link></li>
</ul>


<div className='flex justify-between gap-2 '>
     <button className='px-2 py-1 bg-transparent  ring-1 ring-gray-400 rounded-lg hover:bg-blue-600  hover:text-white'><FaTwitter /></button>
     <button className='px-2 py-1 bg-transparent  ring-1 ring-gray-400 rounded-lg hover:bg-blue-600 hover:text-white '><FaDiscord />
     </button>
</div>
 
 <div className='flex w-48 gap-3'>
  <Link to="Log-in" onClick={toggleActive} className={`px-3 py-2 font-medium text-sm rounded-md ring-1 hover:bg-black hover:text-white ring-gray-400 ${isActive ?"bg-black text-white ":" text-black bg-transparent hover:bg-gray-100 "}`}>
     Log-in
     </Link>
     <Link to="Sign-Up"  onClick={toggleActive} className={`px-3 py-2 font-medium text-sm rounded-md ring-1  hover:bg-black hover:text-white ring-gray-400 ${isActive ?"bg-black text-white ":" text-black bg-transparent hover:bg-gray-100"}`}>
    Sign-Up
     </Link>
 
 </div>


   
     </div>



     <div className='flex justify-between items-center sm:hidden '>
     <div>
     <a href="" className='font-bold tracking-widest text-2xl sticky  left-8 top-8'>RAWG</a>
</div>
<button  className='bg-gray-400 rounded-lg p-2 block sm:hidden sticky top-8 right-8'><IoIosMenu className='text-4xl' /></button>
     </div>
   </div>
   </>
  )
}

export default Navbar