import React from 'react'
import { BiError } from "react-icons/bi";
const Error = () => {
  return (
    <>
      <div  className='grid place-content-center'>

<div className='flex flex-col text-center'>
      <BiError className='text-yellow w-96 h-96 ' />
    <h1 className='text-4xl text-black font-medium'>404 Page Not Found</h1>
</div>
      </div>
    
    </>
  )
}

export default Error