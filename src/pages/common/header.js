import React, { useState } from 'react';

import styles from '../styles/index.module.css';
import Marquee from './Marquee';
function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <>
        <div className="bg-orange-600 h-12 py-2 sm:py-3 text-white">
            <div className="flex flex-wrap items-center justify-between px-4">
                {/* Contact Info and Social Icons */}
                <div className="flex items-center space-x-4 sm:space-x-6 flex-1">
                    <i className="fa fa-facebook-square text-xl sm:text-2xl"></i>
                    <i className="fa fa-instagram text-xl sm:text-2xl"></i>
                    <span className="hidden md:inline">8794113218 | 7005116152</span>
                    <span className="hidden md:inline"> | </span>
                    <span className="hidden md:inline">sales@tripmydeal.com | admin@travel365online.com</span>
                </div>

                {/* User Info and Notifications */}
                {/* <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <i className="fa fa-bell text-xl sm:text-2xl"></i>
                    <i className="fa fa-chevron-down text-xl sm:text-2xl"></i>
                    <span className="hidden sm:inline">Hi, tripmydeal.in</span>
                    <i className="fa fa-chevron-down text-xl sm:text-2xl hidden sm:inline"></i>
                </div> */}
            </div>
        </div>
        
        <nav className="bg-white sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-black">
                                <img src="/logo.png" className="w-20" alt="Logo"/>
                            </a>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8 text-xl">
                        <a href="/" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                            Home
                        </a>
                        <a href="/about" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                            About
                        </a>
                        <a href="/hotels" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                            Hotels
                        </a>
                        <a href="/packages" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                            Packages
                        </a>
                        <a href="/contact" className="text-black hover:bg-blue-500 hover:text-white rounded-lg p-2">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-black focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-4 text-xl bg-white p-4">
                    <a href="/" className="text-black hover:bg-orange-600 hover:text-white rounded-lg p-2">
                        Home
                    </a>
                    <a href="/about" className="text-black hover:bg-orange-600 hover:text-white rounded-lg p-2">
                        About
                    </a>
                    <a href="/hotels" className="text-black hover:bg-orange-600 hover:text-white rounded-lg p-2">
                        Hotels
                    </a>
                    <a href="/packages" className="text-black hover:bg-orange-600 hover:text-white rounded-lg p-2">
                        Packages
                    </a>
                    
                    <a href="/contact" className="text-black hover:bg-orange-600 hover:text-white rounded-lg p-2">
                        Contact
                    </a>
                </div>
            </div>
        </nav>

        <Marquee />

        
     

        
                           
        </>
    );
}
export default Header;