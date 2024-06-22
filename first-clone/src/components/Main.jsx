import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <>
    <div className='main grid place-content-center m-10 w-auto'>
      <div className='main-divison flex justify-between items-center '>
       <div className='left-section max-w-lg p-8 max-h-[500px]'>
         <h1 className='text-3xl font-bold '>
            Explore RAWG Video Games DatabaseAPI
         </h1>

         <p className='mt-5 font-light tracking-wider leading-2   max-h-80 text-wrap overflow-hidden'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa libero fugit minus modi adipisci laborum. Harum consequatur adipisci recusandae vero, cupiditate ab aspernatur atque corrupti ut ipsam numquam aperiam. Distinctio aspernatur impedit magni et qui expedita voluptate quam accusamus, itaque, amet debitis, quis reiciendis laboriosam quidem dolor perferendis ipsum rerum eveniet pariatur tempore nihil? Natus, pariatur illum soluta corrupti saepe quo voluptate animi ullam explicabo eius sapiente excepturi iure.
         </p>

       <div className='flex sm:flex-row '>
<Button title='Read Documentation'/>
<Button title='Get API Key' className='bg-black text-white hover:bg-white hover:text-white ' />
    
       </div>


       </div>
       <div className='right-section hidden sm:inline-block'>

        <img src="https://wallpapercave.com/wp/wp2208692.png" alt="Pubg "  className='sm:max-w-md sm:h-96 shadow-xl sm:rounded-full max-w-64 h-48 rounded-none m-5'/>
       </div>

      </div>

    </div>
    
    </>
  )
}

export default Main