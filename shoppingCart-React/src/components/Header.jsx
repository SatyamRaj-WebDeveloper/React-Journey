import React, { useState } from 'react'
import{Link, NavLink }  from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from '../Context';
import { MdOutlineCancel } from "react-icons/md";



const Header = () => {
  const {state:{cart}} = CartState();

const [isOpen ,setisOpen]=useState(false)

const MenuOptions=()=>{
  setisOpen(p=>!p)
}

  return (
    <>
    <div className='bg-gray-600 w-screen h-20 p-4'>
        <div className='flex items-center justify-between mr-4 ml-8  '>
        <Link className='text-white text-3xl font-medium '>Shopping Cart</Link>
        
        <input type="text" placeholder='Search Product...' className='w-48 px-3 py-1 rounded-md hidden sm:flex sm:w-2/4
        outline-none mx-2'/>

        <div className='flex justify-between items-center gap-10'>
            <ul className='sm:flex gap-4 hidden text-white text-xl font-semibold'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li className='flex'><NavLink to='/Cart' >Cart<span>({cart.length})</span></NavLink></li>
            </ul>
            <Link className='sm:flex text-white text-xl w-20 h-10 text-center bg-green-400 p-2 rounded-md justify-center items-center gap-3 hidden ' >
            <div className='relative'>
            <FaShoppingCart className='text-md'/>
      <span className='w-4 h-4 p-1  rounded-full absolute top-0  text-red-500 font-medium text-sm text-center '>{cart.length}</span>
            </div>
       
        <select name="" id="" className='bg-inherit p-2 w-2 h-2 outline-none '>

{
  cart.length > 0 ? (
    cart.map((prod)=>(
      <option value={prod.id} key={prod.id}
      className='text-md p-4 bg-white text-gray-500 ' >
         <span key={prod.id}>
       <img
       className='w-16 h-16 rounded-full'
       src={prod.image}
       alt={prod.name}
       />
        <div className='flex gap-3 justify-between items-center'>
          <span className='text-gray text-md bg-white p-4'>{prod.name}</span>
          <span className='text-gray text-md bg-white p-4'>₹{prod.price.split(".")[0]}</span>
        </div>

      </span>
      </option>
     
    ))
  ):(<div>Cart is Empty</div>)
}

        </select>
        </Link>
        </div>
        
        
<div className='relative'>
<FaAlignJustify className='text-white text-xl hover:text-blue-600 sm:hidden absolute top-0 right-0' onClick={MenuOptions} />
 <br />
        {
          isOpen ? (
            <div className=' relative w-10/12  h-72 py-2  sm:hidden
            bg-gray-400 text-white min-w-32'>
              <ul className=' absolute w-full h-fit '>
                <li className='px-2 py-2 leading-7 hover:bg-gray-400  border-b-2 border-gray-500  w-auto hover:text-black'><Link to='/' onClick={()=>setisOpen(p=>!p)} >Home</Link></li>
                <li className='px-2 py-2 leading-7 border-b-2 border-gray-500 hover:bg-gray-400 hover:text-black w-auto'><Link to='/Cart'onClick={()=>setisOpen(p=>!p)} >Cart</Link></li>
              </ul>
              <div className='absolute top-0 right-0 text-xl m-2' ><MdOutlineCancel onClick={()=> setisOpen(p=>!p)} title='close'/></div>
            </div>
          ):('')
        }
</div>
       

        </div>
       
    </div>
    </>
  )
}

export default Header