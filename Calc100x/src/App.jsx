import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Category from './Pages/Category.jsx'
import About from './Pages/About.jsx'
import Navbar from './Components/Navbar.jsx'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </div>
  )
}
