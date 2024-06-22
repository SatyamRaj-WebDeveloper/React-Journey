import React from 'react'

const AddingApi = () => {
  return (
    <>
    <div className=' gap-8 sm:flex sm:flex-row p-4 items-center justify-center  sm:w-full max-h-fit w-96 m-5 flex-col'>
     <div className=' max-w-sm'>
        <h1 className='text-4xl font-bold '>
        Adding the API key to your request
        </h1>
        <p className='leading-2 font-md mt-4 '>
        You must include an API key with every request. In the following example, replace YOUR_API_KEY with your API key.
        </p>
     </div>
       <div className='mt-5 bg-black text-white rounded-xl shadow-xl max-w-sm p-4'>
<a href="" className='hover:underline'>GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY</a>
<br />
<a href="" className='hover:underline '>GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7</a>

       </div>

    </div>
    </>
  )
}

export default AddingApi