import React, { useState } from 'react';

import styles from '../styles/index.module.css';
import Marquee from './Marquee';
function MobileHeader(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <nav className="bg-gray-50 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
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
                    <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <i className="fa fa-facebook-square text-xl sm:text-2xl"></i>
                    <i className="fa fa-instagram text-xl sm:text-2xl"></i>
                    <span className="">+91 8794113218</span>
                    </div>
                    
                    
                </div>
            </div>

            
            <div className="flex flex-wrap items-center justify-between pb-6 pt-2">
                <div className='w-1/4'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-24 w-20'>
                        <a href='/packages'>
                            <i className='fa fa-diamond'></i>
                            <p>Packages</p>
                        </a>
                    </button>
                </div>
                <div className='w-1/4'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-24 w-20'>
                        <a href="/hotels">
                            <i className='fa fa-hotel '></i>
                            <p>Hotels</p>
                        </a>
                    </button>
                </div>
                <div className='w-1/4'>
                    <button className=' m-1  rounded-lg bg-white text-sm font-bold h-24 w-20'>
                        <a>
                            <i className='fa fa-car '></i>
                            <p>Cars</p>
                        </a>
                    </button>
                </div>
                <div className='w-1/4'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-24 w-20'>
                        <a>
                            <i className='fa fa-map-marker'></i>
                            <p>Destination</p>
                        </a>
                    </button>
                </div>

                <div className='w-1/3 content-end'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-20 w-20'>
                        <a href='./'>
                           
                            <p>Home</p>
                        </a>
                    </button>
                </div>

                <div className='w-1/3 content-end'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-20 w-20'>
                        <a href='./about'>
                           
                            <p>About</p>
                        </a>
                    </button>
                </div>
                <div className='w-1/3'>
                    <button className=' m-1 rounded-lg bg-white text-sm font-bold h-20 w-20'>
                        <a href='./contact'>
                           
                            <p>Contact</p>
                        </a>
                    </button>
                </div>
                
                
                
            </div>
        </nav>

       
        
     

        
                           
        </>
    );
}
export default MobileHeader;