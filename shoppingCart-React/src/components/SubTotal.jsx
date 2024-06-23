import React from 'react'
import { CartState } from '../Context'

const SubTotal = () => {
    const {state:{cart},dispatch} = CartState()

    let CartSum = cart.reduce((acc,curr)=> acc + parseFloat(curr.price),0)
    

  return (
   <>
   <div className='w-96 h-fit bg-gray-600 text-white p-8 m-4 hidden sm:block'>
     
     <h1 className='text-2xl font-medium'>Sub-Total <span>({cart.length}) Items</span></h1>
     {
        cart.map((prod)=>(
            <>
              <div className='flex justify-between items-center text-lg '>
            <div className='flex flex-col'>
                <span className='w-64 leading-9'>{prod.name}</span>
            </div>
            <div>
                <span>₹ {prod.price.split(".")[0]}</span>
                
            </div>
            
            </div>
            
            </>
          
            
        ))
     }
     <p className='text-2xl mt-4 flex justify-between '>Total : <span>₹ {CartSum}</span></p>
     <button className='w-full px-3 py-2 text-white bg-blue-600 mt-6 font-medium hover:bg-white hover:text-blue-600 hover:ring-1 hover:ring-blue-600 drop-shadow-lg'>Proceed To Payment</button>
   </div>
   </>
  )
}

export default SubTotal