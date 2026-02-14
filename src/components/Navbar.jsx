import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import './Navbar.css'


import { FaSearch, FaShoppingCart } from "react-icons/fa"; 
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <header className="navbar-header">
            <nav className="navbar-container">

                <div className="navbar-logo">
                    <img src={logo} alt="" />
                </div>

                <ul className="navbar-links">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    

                    <li className="dropdown">
						<p>Pages</p>

						<div className='dropdown-menu'>
							<Link to={'/services'}>
							<option value="Service">Service</option>
							</Link>
                            <Link to={'/team'}>
							<option value="Team">Team</option>
							</Link>
                            <Link to={'/portfolio'}>
							<option value="Portfolio">Portfolio</option>
							</Link>
                            <Link to={'/blog'}>
							<option value="Blog">Blog</option>
							</Link>
                            <Link to={'/contact'}>
							<option value="Contact">Contact</option>
							</Link>
						</div>
                    </li>

                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/news'}>News</Link></li>
                </ul>


                <div className="navbar-actions">
                    <div className="search-box">
                        <input type="text" className="search-input" />
                        <div className="search-btn">
                            <FaSearch color="white" />
                        </div>
                    </div> 

        
                    <div className="cart-box">
                        <div className="cart-circle">
                            <FaShoppingCart color="white" />
                        </div>
                        <span className="cart-text">Cart (0)</span>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Navbar