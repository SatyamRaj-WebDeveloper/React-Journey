import React from 'react'
import Filter from './Filter';
import SingleProduct from './SingleProduct'

const Home = () => {
  return (
    <>
    <div className='w-full h-full overflow-auto bg-slate-200  text-white p-4 flex'>
    <Filter clasname=''/>
    
    <SingleProduct/>

    </div>
    
    </>
  )
}

export default Home