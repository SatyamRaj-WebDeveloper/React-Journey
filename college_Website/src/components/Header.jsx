import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <>
    <div className=''>
        <nav>
            <div className='flex items-center justify-evenly border-b '>
                <div>
                    <Link>
                      <p className='text-Black font-bold text-xl'>My Logo</p>
                    </Link>
                    
                    </div>
                <div className='max-w-fit p-4 grid place-content-center gap-4 grid-rows-1 grid-cols-4 list-none' >
                    
                        <li>
                        <NavLink className={({isActive})=>
                            `text-gray-700  font-normal py-2 pr-4
                        pl-3   duration-200 border-b
                        ${isActive ? "text-orange-700" : "text-gray-700"}
                         border-gray-100 hover:bg-gray-50
                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700
                        lg:p-0  `
                        }to="/">
                    Home 
                    </NavLink >
                        </li>
                    <li>
                    <NavLink className={({isActive})=>
                            `text-gray-700  font-normal py-2 pr-4
                        pl-3   duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50
                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700
                        lg:p-0  `
                        } to="/Contact">
                    Contact 
                    </NavLink>
                    </li>
                   
                    <li>
                    <NavLink className={({isActive})=>
                            `text-gray-700  font-normal py-2 pr-4
                        pl-3   duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50
                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700
                        lg:p-0  `
                        } to="About">
                    About 
                    </NavLink>
                    </li>
                 
                    <li>
                    <NavLink className={({isActive})=>
                            `text-gray-700  font-normal py-2 pr-4
                        pl-3   duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50
                        lg:hover:bg-transparent lg:border-0 hover:text-orange-700
                        lg:p-0  `
                        } to="Github">
                    Github 
                    </NavLink>
                    </li>
                    
                
                </div>
                <div className='flex '>
                   <NavLink  className={()=>`block text-md font-semibold m-3`}>
                    Log-in 
                   </NavLink>
                   <NavLink className={()=>`block text-md font-semibold 
                   px-3 py-2 bg-orange-600 max-w-fit max-h-10 rounded-xl
                   hover:bg-white hover:text-orange-600 hover:border transtition-all hover:animate-pulse m-auto `}>
                    Get Started
                   </NavLink>
                </div>
            </div>
        </nav>
     </div>
     </>
  )
}

export default Header