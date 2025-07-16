import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Navbar from './Components/Navbar.jsx'
import CalculatorPage from './Pages/CalculatorPage.jsx'
import AdminPanel from './Pages/AdminPanel.jsx'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>}>
        
        </Route>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="admin" element={<AdminPanel/>}/>
        <Route path="calculator/:id" element={<CalculatorPage/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  )
}
