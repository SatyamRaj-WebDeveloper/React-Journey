import React from 'react'

const Cards = ({
    heading ,
    title,
    className,
    children
}) => {
  return (
   <>
   <div className={` p-4  sm:w-80 w-48   h-32  rounded-xl shadow-xl ${className} `}>
   {children}
    <h1 className='absolute top-16  ' >
        {heading}
     </h1>
      <span className='absolute top-20'>{title}</span>

    </div>
   </>
  )
}

export default Cards