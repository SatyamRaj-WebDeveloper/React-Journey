import React from 'react'
import  '../slidingbtn.css'

const Button = ({
    title,
    className,
}) => {
  return (
   <button className={`px-4 py-2 sm:max-w-md sliding-bg sm:max-h-20  w-48 h-10  m-5 rounded-lg text-center  ring-1 ring-gray-400 ${className}`}>
    <span >{title }</span>
   </button>
  )
}

export default Button