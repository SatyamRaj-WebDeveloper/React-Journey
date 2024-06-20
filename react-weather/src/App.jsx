import { useState } from 'react';
import './index.css'
import { IoMdSearch } from "react-icons/io";
import Response from './components/Response';


function App() {
const[Input,setInput] = useState('')
const [Data , setData] = useState({})
const [gotData , setgotData] = useState(false)

const APIkey = '7cf8eed5ca96038479971e6388039c50';
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'


const searchWeather =async()=>{
 if(!Input){
  alert('Please enter A Cityname')
 }else{
  let value =  await fetch(url + `&q=${Input}` + `&appid=${APIkey}`)
  let data = await value.json();
  setgotData(true)
    setData(data)
 }
}


const enterPressed=(e)=>{
  if(e.key ==='Enter')
    searchWeather()
}

  const handlesearch=(e)=>{
     setInput(e.target.value)
  }

  return (
   <>
    <div className="w-full m-0 p-4  bg-[url('https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen bg-center bg-cover flex justify-center items-center bg-blend-overlay bg-gray-500 relative  bg-opacity-50">
    
    <div className='w-80  h-fit bg-transparent flex  flex-col items-center  p-8 backdrop-blur-sm  absolute overflow-hidden m-10'>
     <h1 className='text-4xl text-white m-2 font-medium '>Weather App</h1>
     <div className='flex  bg-white items-center px-3 mt-4 overflow-hidden'>
     <input type="text" className='w-fit h-10 px-4 py-2 outline-none ' placeholder='Search here...' onChange={handlesearch} onKeyDown={enterPressed}/>
     <button className='text-2xl text-gray-500' onClick={searchWeather}><IoMdSearch /></button> 
     </div>
     
{
  gotData ?  <div >
  <Response name={Data.name} lat={Data.coord.lat} long={Data.coord.lon} temp={Data.main.temp} Humid={Data.main.humidity} feel={Data.main.feels_like} Description={Data.weather[0].description}/>
 </div>: <div></div>
}
    </div> 
    </div>
   </>
  )
}

export default App
