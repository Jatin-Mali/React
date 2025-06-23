import React from 'react'
import './Home.css'
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import CalculatorCard from '../Components/CalculatorCard';

const Home = () => {
  return (
    <>
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input type="search" placeholder='Search...' className="search" id="search" />
        <FaFilter className="filter-icon" />
      </div>
      <div className='home-description'>
        <h1 className='title'>The <span>Ultimate</span></h1>
        <h2 className='subtitle'>All-in-one calculator toolkit</h2>
        <h3 className='description'>Fast, powerful, and beautifully simple for everyday use</h3>
      </div>
        <CalculatorCard />

    </>
  )
}

export default Home
