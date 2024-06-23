import React from 'react'
import { CartState } from '../Context'
import { MdDelete } from "react-icons/md";
import SubTotal from './SubTotal';


const Cart = () => {
  const {state:{cart},dispatch}= CartState();
  console.log(cart)
  let start = 1;
  let end = 10;
  const numbers = Array.from({length:end-start+1},(_,i)=> start+i)
  
  return (
   
    <div className='w-full h-screen flex justify-evenly  bg-white overflow-auto '>
   <div className='card-container'>
      <ul>
        {
          cart.map((prod)=>(
            <li key={prod.id}>
              <div className='flex sm:flex-row sm:w-fit sm:h-40 m-4 p-4 ring-1 ring-gray-400 gap-6 justify-center items-center flex-col w-64 h-80'>
                <img src={prod.image} alt={prod.name} className='w-32 h-28'/>
                <span className='w-48'>{prod.name}</span>
                <span className='w-fit'>₹{prod.price.split(".")[0]}</span>
               <select name="" id="" className='w-20 h-10 ring-1 ring-gray-500 p-2 outline-none'>
                {
                  numbers.map((num)=>{
                    return(
                      <option value={num} key={num} onChange={(e)=>dispatch({
                        type:"CHANGE_CART_QTY",
                        payload:{
                          id:prod.id,
                          qty:e.target.value
                        }
                      })}>
                    {num}
                    </option>
                    )
                  
                  })
                }
                
               </select>
                <button className='text-3xl' onClick={()=>dispatch(
                  {
                  type:"REMOVE_FROM_CART",
                  payload:prod
                }
                )}><MdDelete />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
   </div>

   <div>
    {
      cart.length>0?(<SubTotal/>):(
           <div className='flex justify-center items-center'>
            <span className='text-4xl font-bold'>Cart is Empty !</span>
          </div>
      )
    }
   
   </div>
      

    </div>
  
  )
}

export default Cart