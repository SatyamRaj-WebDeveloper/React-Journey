import Navbar from './Navbar'
import Main from './Main'
import AddingApi from './AddingApi'
import BuildRAWG from './BuildRAWG'
import ReadyStart from './ReadyStart'
import { Outlet } from 'react-router-dom'
import SignUp from './SignUp'

function App() {
  

  return (
    <>
    <Navbar/>
    <Main/>
    <AddingApi/>
    <BuildRAWG/>
    <ReadyStart/>
    
    </ >
  )
}

export default App
