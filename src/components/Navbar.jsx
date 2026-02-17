import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './Navbar.css';

import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);


    const closeMobileMenu = () => setClick(false);

    return (
        <header className="navbar-header">
            <nav className="navbar-container">

        
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Organick" />
                    <span></span>
                </Link>

 
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>


                <div className={click ? "nav-menu active" : "nav-menu"}>
                    
                    <ul className="navbar-links">
                        <li className='nav-item'>
                            <Link to={'/'} className='nav-link' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/about'} className='nav-link' onClick={closeMobileMenu}>About</Link>
                        </li>

                 
                        <li className="nav-item dropdown">
                            <div className="dropdown-trigger">
                                Pages <IoIosArrowDown />
                            </div>
                            <div className='dropdown-menu'>
                                <Link to={'/services'} onClick={closeMobileMenu}>Services</Link>
                                <Link to={'/team'} onClick={closeMobileMenu}>Team</Link>
                                <Link to={'/portfolio'} onClick={closeMobileMenu}>Portfolio</Link>
                                <Link to={'/blog'} onClick={closeMobileMenu}>Blog</Link>
                                <Link to={'/contact'} onClick={closeMobileMenu}>Contact</Link>
                                <Link to={'/password'} onClick={closeMobileMenu}>Password</Link>
                                <Link to={'/licenses'} onClick={closeMobileMenu}>Licenses</Link>
                            </div>
                        </li>

                        <li className='nav-item'>
                            <Link to={'/shop'} className='nav-link' onClick={closeMobileMenu}>Shop</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/projects'} className='nav-link' onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={'/news'} className='nav-link' onClick={closeMobileMenu}>News</Link>
                        </li>
                    </ul>

     
                    <div className="navbar-actions">
                        <div className="search-box">
                            <input type="text" className="search-input" placeholder="Search..." />
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
                </div>
            </nav>
        </header>
    )
}

export default Navbar