import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [Numbers , setNumbers] = useState(false)
  const [CharAllowed  , setCharAllowed ] = useState(false)
  const [Password , setPassword ] = useState()
  

  //useRef
  const btnref = useRef(null)
  
  const copyPassword = useCallback(() =>{
    btnref.current?.select();
    window.navigator.clipboard.writeText(Password);
  },[Password])

//  Random-password-generated
  const password = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    

    if(Numbers) str+= " 0123456789"
    if(CharAllowed) str+= "!@#$%^&*()?{}[]~`+-/##@#"
    if(Numbers && CharAllowed) str+= "0123456789!@#$%^&*()?{}[]~`+-/##@#"

     for( let i = 1 ; i<= Length ; i++){
       let randomPass = Math.floor(Math.random() *str.length +1 ) 
       pass += str.charAt(randomPass)
       console.log(pass)
     }
     setPassword(pass)
  },[Length,Numbers,CharAllowed])
   
// USE-EFFECT  
useEffect(()=>{
  password()
},[Length , Numbers ,CharAllowed ,password])
  
 

     const handleChange = (e) =>{
      const actual =e.target.value;
      setLength(actual)
     }
  return (
    <>
     <div className='flex justify-center items-center absolute top-[40%] left-[38%] '>
       <di className=' bg-gray-500 p-5 rounded-xl text-center'>
        <p className='text-white font-semibold text-2xl m-3'>Password Generator</p>
        <div>
          <input type="text" className='p-2 rounded-l-lg outline-none max-w-fit'  placeholder='Password' value={Password} readOnly ref={btnref}/>
          <button className='bg-blue-500 px-2.5 py-2 rounded-r-lg text-white font-medium hover:bg-white hover:text-blue-500 '  onClick={copyPassword}>Copy</button>
          </div>
        <div className='m-2  ' >
        <label className='text-white font-medium'>Length ({Length}) </label>
          <input 
          type="range" 
          className='mx-1' 
          min={8}
           max={100} 
           value={Length}
           onChange={handleChange}

          />
      
        <input 
        type="checkbox"
        className='mx-1'
         onChange={()=>{
            setNumbers((prev) => !prev)
         }}
         />
        <label className='text-white font-medium'>Numbers</label>
        <input 
        type="checkbox" 
        className='mx-1'
        onChange={()=>{
          setCharAllowed((prev) => !prev)
          
        }} />
        <label className='text-white font-medium'>Characters</label>
        </div>
       </di>
     </div>
    </>
  )
}

export default App
