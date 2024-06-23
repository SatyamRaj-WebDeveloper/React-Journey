import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Cart from './components/Cart'
import SubTotal from "./components/SubTotal"

function App() {

  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' Component={Home} exact/>
      <Route path='/Cart' Component={Cart} exact/>
    
     </Routes>
    </BrowserRouter>
  )
}

export default App
