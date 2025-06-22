import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <h1>I love Calc</h1>
                </div>

                <div className="pages">
                    <ul className='nav-links'>
                        <NavLink to="/" className='link'>Home</NavLink>
                        <NavLink to="/category" className='link'>Categories</NavLink>
                        <NavLink to="/about" className='link'>About</NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
