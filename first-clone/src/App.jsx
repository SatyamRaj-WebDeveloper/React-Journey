import Navbar from './components/Navbar'
import Main from './components/Main'
import AddingApi from './components/AddingApi'
import BuildRAWG from './components/BuildRAWG'
import ReadyStart from './components/ReadyStart'
import { Outlet } from 'react-router-dom'
import SignUp from './components/SignUp'
import Layout from './components/Layout'

function App() {
  

  return (
    <>
   <Layout/>
    <Outlet/>
    </ >
  )
}

export default App
