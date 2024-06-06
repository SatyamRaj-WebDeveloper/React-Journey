import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Contact from './components/Contact.jsx'
import About from  './components/About.jsx'
import App from './App.jsx'
import Home  from './components/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
