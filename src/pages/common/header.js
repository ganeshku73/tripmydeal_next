import React from 'react';
import styles from '../styles/index.module.css';
function Header(){
    return(
        <>
        <div className=" bg-orange-600 h-12 py-2 sm:py-3 text-white">
            <div className="flex flex-wrap">
                <div className="w-10/12">
                    <i className="fa fa-facebook-square pl-12 sm:pl-20 py-1 sm:py-2"></i>
                    <i className="fa fa-instagram px-4 sm:px-6  py-1 sm:py-2"></i>
                    <span className="pr-3 sm:pr-5">  |  </span>
                    <span className="pr-3 sm:pr-5"> +91 40-786756535 / 040-67888465337 /338 /339 340/  </span>
                    <span className="pr-3 sm:pr-5">  |  </span>
                    <span className="pr-3 sm:pr-5">  abcd123@gmail.com </span>
                </div>
                <div className="w-2/12">
                    <i className="fa fa-bell text-right"></i>
                    <i className="fa fa-chevron-down pl-1 sm:pl-2"></i>
                    <span className="pl-2 sm:pl-3"> Hi, tripmydeal.in  <i className="fa fa-chevron-down pl-2 sm:pl-3"></i></span>
                </div>
            </div>
        </div>
        
        <nav className="bg-white sticky top-0 z-50 px-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-black">
                              <img src="/logo.png" className="w-20"/>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-8  text-xl">
                            <a href="/home" className="text-black hover:bg-blue hover:text-black rounded-lg p-2">
                                Home
                            </a>

                            <a href="/about" className="text-black hover:bg-primary hover:text-black rounded-lg p-2">
                                About 
                            </a>
                            
                            <a href="/hotels" className="text-black hover:bg-white hover:text-black rounded-lg p-2">
                                Hotels
                            </a>

                            <a href="/gallery" className="text-black hover:bg-white hover:text-black rounded-lg p-2">
                                Gallery
                            </a>

                            <a href="/blog" className="text-black hover:bg-white hover:text-black rounded-lg p-2">
                                Blog
                            </a>

                            <a href="/contact" className="text-black hover:bg-white hover:text-black rounded-lg p-2">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div className=" bg-black text-white h-10 py-1 sm:py-2 ">
            <div className="flex flex-wrap">
                <marquee className=" scroll-m-5 ">
                    <span>Uttarakhand Package  - (5N/6D) Adventure & Skiing Package <button className="  bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                    <span className="pl-6 sm:pl-9">Best Gujrat Family Tour - (5N/6D) <button className="  bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                    <span  className="pl-6 sm:pl-9">Odisha & Deoghar Package <button className=" bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                    <span  className="pl-6 sm:pl-9">Assam Tour Package - (5D/6N) <button className=" bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                    <span  className="pl-6 sm:pl-9">Leh & Ladakh Package - (6D/7N) <button className=" bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                    <span  className="pl-6 sm:pl-9">Shimla Manali Package - (6D/7N) <button className="  bg-orange-600 mx-2 sm:mx-3  text-white px-2 rounded-md">Book Now</button></span>
                </marquee>

            </div>
        </div>
        
     

        
                           
        </>
    );
}
export default Header;