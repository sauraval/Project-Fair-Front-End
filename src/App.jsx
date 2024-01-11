import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/Projects' element={<Projects/>}/>

    </Routes>
    <Footer/>

    </>
  )
}

export default App
