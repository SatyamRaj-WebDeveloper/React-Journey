import React from 'react'

const Dropdowns = ({
    setCurrency,
    currency,
    title,
    currinfo,
    

}) => {
  return (
    <>
  <div className=' sm:m-3 text-center m-2'>
  <label htmlFor={title} className='text-xl mr-2 text-gray-700' >{title}</label>
  <select value={currinfo} onChange={(e)=>setCurrency(e.target.value)} className='p-1 w-20 outline-none  border border-gray-400 rounded-md shadow-sm focus:ring-1 focus:outline-none focus:ring-indigo-500 bg-slate-200 text-gray-600'>

    {currency?.map((curr)=>{
    return <option  value={curr} key={curr}>
        {curr}
   </option>
    })}
 
  </select>
  </div>


    </>
  )
}

export default Dropdowns