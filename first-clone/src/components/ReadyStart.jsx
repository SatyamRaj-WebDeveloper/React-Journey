import React from 'react'
import Cards from './Cards'
import Button from './Button'
import {Link} from 'react-router-dom'


const ReadyStart = () => {
  return (
   <>
   <div className='bg-black w-full h-fit p-8 items-center justify-center m-0'>
   <div>
     <h1 className='text-white font-bold text-4xl text-center mb-8'>Ready to Start?</h1>
     <div className='flex justify-center items-center gap-6 font-light shadow-xl flex-col sm:flex-row'>

        {/* first-card */}
        <Cards className={`h-96 hover:scale-105 text-white w-fit p-4 ring-1 ring-white transition-all`}>
     <h1 className='text-2xl font-bold'>Free</h1>
     <span className='m-2'>For Personal and Hobby Projects</span>
     <Button title="Get API Key" className={`ring-1 ring-white bg-white font-medium text-blue-600  mt-3 mb-3`}/>
      <ul className='text-white'>
        <li className='m-2'>Non Commercial projects only </li>
        <li className='m-2'>500,000+ video games data</li>
        <li className='m-2'>up to 20,000 requests per month</li>
        <li className='m-2'>Required backlinks to RAWG from pages where the data is used </li>
      </ul>
     </Cards>

     {/* second card */}
        <Cards className={`h-fit hover:scale-105 transition-all bg-blue-600 text-white w-fit p-4 `}>
     <h1 className='text-2xl font-bold '>Buisness</h1>
     <span className='m-2'>For small and mid-size companies</span>
     <Button title="Get started" className={`ring-1 ring-white bg-white font-medium text-blue-600 m1-0 mb-0`}/>
     <p className='text-sm  font-thin ml-8'>You Need to <Link to="Sign-Up" className='underline font-medium'>Sign-up</Link> first</p>
      <ul className='text-white '>
        <li className='m-2 font-light'>
All in Free Plan </li>
        <li className='m-2 font-light '>
Commercial use</li>
        <li className='m-2  font-light'>
Where to buy links</li>
        <li className='m-2  font-light'>
Gameplay videos,relevant twitch and youtube videos </li>
        <li className='m-2  font-light'>
up to 50,000 requests per month</li>
        <li className='m-2  font-light'>
Email support </li>
      </ul>
     </Cards>


     {/* third-card */}
        <Cards className={`h-96 bg-white hover:scale-105  text-gray-500 w-fit p-4 ring-1 ring-white transition-all`}>
     <h1 className='text-2xl font-bold text-black'>Enterprise</h1>
     <span className='m-2'>For Projects with custom needs</span>
     <Button title="Contact Us" className={`ring-1 ring-gray-500 bg-white font-medium text-blue-600  mt-3 mb-3`}/>
      <ul className='text-gray-500'>
        <li className='m-2'>Non Commercial projects only </li>
        <li className='m-2'>500,000+ video games data</li>
        <li className='m-2'>up to 20,000 requests per month</li>
        <li className='m-2'>Required backlinks to RAWG from pages where the data is used </li>
      </ul>
     </Cards>
     </div>
   </div>
   </div>
   
   
   </>
  )
}

export default ReadyStart