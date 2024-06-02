import './index.css'
import Dropdowns from './components/inputbox'
import { useEffect, useState } from 'react'
import { RiArrowLeftRightFill } from "react-icons/ri";


function App() {
const [amount ,setamount] = useState(0)
const [currency ,setcurrency] = useState(null)
const [fromCurrency ,setfromCurrency]= useState()
const [ToCurrency ,setToCurrency]= useState()
const [ConvertedAmount ,setConvertedAmount] = useState()
const [ coverting ,setconverting] = useState(false)


const CalculateAmount = async()=>{
  if(!amount) return ;
  setconverting(true)
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${ToCurrency}`)
      
      const data = await res.json();
      console.log(data)
      const rates = data.rates[ToCurrency]
      console.log(rates)
    setConvertedAmount(data.rates[ToCurrency]+ " " + ToCurrency)
    
    
    } catch (error) {
      console.log(error)
    }finally{
      setconverting(false)
    }
   }

   const swapcurrency=()=>{
    setToCurrency(fromCurrency);
    setfromCurrency(ToCurrency)
   }


const CurrencyConvert = async()=>{
  
  try {
   const res= await fetch("https://api.frankfurter.app/currencies")
   const data= await res.json()
  //  console.log(data)
   setcurrency(Object.keys(data))
   
  //  console.log(Object.keys(data))

  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  CurrencyConvert();
},[amount])



  return (
    <>
      <div className='w-full h-screen bg-gray-300 grid place-content-center '>
        <div className='bg-white max-w-[300px] sm:max-w-xl max-h-fit p-5 rounded-md shadow-lg m-5 sm:m-0'>
          <h2 className='text-xl font-medium text-center'>Currency Converter </h2>
          <div className='grid  grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 '>
           <Dropdowns text="USD" title="From :" currinfo={fromCurrency}  currency={currency} setCurrency={setfromCurrency}/>

           <span className='w-fit h-fit m-auto rotate-90 sm:rotate-180'>
           <button className='inline bg-gray-400 text-gray-600 p-2 rounded-full hover:bg-gray-500 hover:text-white ' onClick={swapcurrency}>
          <RiArrowLeftRightFill />
          </button>
           </span>
        
           <Dropdowns  text="INR" title="To :" currinfo={ToCurrency}  currency={currency} setCurrency={setToCurrency} />
          </div>

          <div>
            <label htmlFor="Amount" className='text-lg font-medium mx-2 text-gray-700 mt-3'>Amount:</label>
            <input type="number" onChange={(e)=>
              setamount(e.target.value) 
            }   className='px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500 rounded-lg shadow-md m-auto w-full focus:outline-none border-gray-300 border-2'/>
          </div>
          <div >
            <button className={`rounded-lg bg-violet-500 p-2 w-fit h-fit hover:bg-white hover:text-violet-500 focus:bg-violet-700 hover:ring-1 hover:ring-offset-2 hover:ring-violet-700 focus:text-white mt-5 focus:outline-none sm:bg-cyan-400 sm:text-white sm:focus:ring-1 sm:focus:ring-cyan-400 sm:focus:bg-cyan-600` } 
            onClick={CalculateAmount} >Convert</button>
          </div>
          <div className='text-green-600 mt-2 '>
            <p>Converted from {fromCurrency} to {ToCurrency}  and the amount is {ConvertedAmount}</p>
          </div>
        </div>
      </div>
    </>
  )
 
}

 //https://api.frankfurter.app/currencies
  //https://api.frankfurter.app/latest?amount=1&from=USD&to=INR




export default App
