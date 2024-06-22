import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './components/Main.jsx'
import './index.css'
import {RouterProvider, Route , createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import BuildRAWG from './components/BuildRAWG.jsx'
import ReadyStart from './components/ReadyStart.jsx'
import Layout from './components/Layout.jsx'
import Login from './components/Login.jsx'
import Error from './components/Error.jsx'


const router = createBrowserRouter (
  createRoutesFromElements(
<>
<Route path="/" element={<App/>}/>
<Route path='Sign-Up' element={<SignUp/>}/>
<Route path='Log-in' element={<Login/>}/>
<Route path='*' element={<Error/>}/>
</>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
