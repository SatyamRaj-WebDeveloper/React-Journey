import React from 'react'

const Response = ({
    name,
    lat,
    long,
    temp,
    Humid,
    Description,
    feel
}) => {
  return (
    <>
    <div className='text-white text-xl m-3 leading-9 text-wrap '>
        <h1>Name : {name}</h1>
        <div>
            <h1>Latitude : {lat} </h1>
            <h1>Longitude : {long}</h1>
        </div>
         
         <h1>Temprature : {temp} </h1>
 
         <h1>Feels-like : {feel} </h1>
         
         <h1>Humidity : {Humid} </h1>

         <h1>Description : {Description}</h1>
    </div>
    </>
  )
}

export default Response