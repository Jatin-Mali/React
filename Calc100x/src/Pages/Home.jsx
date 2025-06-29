import './Home.css'
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import CalculatorCard from '../Components/CalculatorCard';
import CalcData from '../Data/CalculatorsData.json'
import { useState } from 'react';

const Home = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredCalculators = CalcData.filter((calc) => {
    const searchMatch = calc.name.toLowerCase().includes(searchItem.toLowerCase());
    const categoryMatch = filter === 'All' || calc.category === filter;

    return searchMatch && categoryMatch;
  })

  const categories = ['All', ...new Set(
    CalcData.map(c => c.category)
  )];

  return (
    <>
      <div className="search-container">
        <IoSearch className="search-icon" />
        <input type="search" placeholder='Search...' className="search" id="search" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
        <FaFilter className="filter-icon" />
        <select className="category-dropdown" value={filter} onChange={(e) => setFilter(e.target.value)}>
          {
            categories.map((cat,index)=>(
              <option key={index} value={cat}>{cat}</option>
            ))
          }
        </select>
      </div>
      <div className='home-description'>

        <h1 className='title'>The <span>Ultimate</span></h1>
        <h2 className='subtitle'>All-in-one calculator toolkit</h2>
        <h3 className='description'>Fast, powerful, and beautifully simple for everyday use</h3>
      </div>
      <CalculatorCard data={filteredCalculators} />

    </>
  )
}

export default Home
