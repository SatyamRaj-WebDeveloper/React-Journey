import React from 'react'

const Filter = () => {
  return (
   <>
   <div className='w-72 h-96 bg-gray-600 p-3 hidden sm:block'>
    <h1 className='text-white text-2xl font-medium mt-4'>Filter Products</h1>
      <div>
        <div className='flex gap-3 items-center mt-4'>
            <input type="checkbox" name="" id="" className='w-4 h-4' />
            <span className='text-[20px]'>Price</span>
        </div>
        <div className='flex gap-3 items-center mt-4'>
            <input type="checkbox" name="" id="" className='w-4 h-4' />
            <span className='text-[20px]'>Delivery</span>
        </div>
        <div className='flex gap-3 items-center mt-4'>
            <input type="checkbox" name="" id="" className='w-4 h-4' />
            <span className='text-[20px]'>inStock</span>
        </div> 
        <div className='flex gap-3 items-center mt-4'>
            <input type="checkbox" name="" id="" className='w-4 h-4' />
            <span className='text-[20px]'>fast Delivery</span>
        </div> 
        <button className='w-64 mt-4 h-8 bg-white font-medium shadow-sm shadow-gray-100 text-black'>Clear Filters</button>
      </div>
   </div>
   </>
  )
}

export default Filter