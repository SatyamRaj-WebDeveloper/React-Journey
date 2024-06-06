
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
