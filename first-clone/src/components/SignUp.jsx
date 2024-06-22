import React from 'react'
import { Link } from 'react-router-dom'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GiSplashyStream } from "react-icons/gi";
import { useState } from 'react';

const SignUp = () => {
  const [Email ,setEmail] = useState('')
  const [Password ,setPassword] = useState('')

 const handlechange=(e)=>{
 
 setEmail(e.target.value)
 console.log(Email)
 }
  return (
<>
    <div className='w-full h-screen bg-[url("https://plus.unsplash.com/premium_photo-1661880357497-5479f9a7ed78?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover bg-center bg-blend-multiply min-h-screen bg-slate-600 p-8 sm:bg-cover  '>
     <nav>
      <div className='flex justify-evenly items-center '>

      <h1 className='text-xl font-bold tracking-wider w-20 text-white'>RAWG</h1>
      <input type="text" className='bg-transparent ring-1 ring-gray-500 text-white rounded-r-full rounded-l-full  w-[800px] py-1.5 px-4 outline-none ' placeholder='Search 868,622 games ' />
      <div className=' flex gap-3 text-center'>
      <Link className='text-white font-medium w-16'>SIGN UP</Link>
       <Link to="Log-in" className='text-white font-medium w-16'>LOG IN</Link>
       <Link className='text-white font-medium w-16'>API</Link>
       <HiDotsHorizontal  className='text-white text-2xl font-medium cursor-pointer hover:bg-gray-200 hover:text-black rounded-full  ' />
      </div>
      </div>
     </nav>
    

    <div className='sm:flex-row flex  flex-col justify-center items-center gap-20  mt-28 '>

      <div className='flex flex-col gap-6'>
        <h1 className=' text-3xl  text-white font-medium '>Sign up</h1>
       
        <input type="Email" required className='w-64 outline-none text-white hover:bg-black-400 focus:ring-gray-400 focus:ring-1 bg-transparent py-2 px-3 ' placeholder='Enter Email'  onChange={handlechange}  />
        <input type="Text" required className='w-64 outline-none text-white hover:bg-black-400  focus:ring-gray-400 focus:ring-1 bg-transparent py-2 px-3 ' placeholder='Username' />
        <input type="password" required className='w-64 outline-none text-white hover:bg-black-400  focus:ring-gray-400 focus:ring-1 bg-transparent py-2 px-3 ' placeholder='Password '/>
     

     <Link className='bg-white text-black text-md font-light shadow-white shadow-sm px-4 py-3 w-64 text-center' type='submit'>Sign up</Link>



      </div>
      <div className='flex flex-col gap-5 w-60'>
      <h1 className='text-xl leading-6  text-white w-48 font-medium'>You Can use social accounts to sign Up</h1>
<div className='flex flex-col gap-6'>
<Link className='bg-blue-500 text-white px-3 py-2 flex justify-evenly rounded-sm'><FaFacebook className='w-4 h-4 rounded-full mt-1'/>Continue with Facebook</Link>
      <Link className='bg-green-400 text-white px-3 py-2 flex justify-evenly rounded-sm'><FaTwitter className='mt-1'/>Continue with Twitter</Link>
      <Link className='bg-cyan-700 text-white px-3 py-2 flex justify-evenly rounded-sm'><GiSplashyStream className='mt-1'/>Continue with Stream</Link>
</div>
     


      </div>
    </div>

    





    </div>

</>
  )
}

export default SignUp