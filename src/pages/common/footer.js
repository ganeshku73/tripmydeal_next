
function Footer(){
    return(
        <>
       
       <footer className="bg-gray-900 text-white">
       <div className="container mx-auto">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4 mt-5">
                <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-orange-600">Trip</span>mydeal  
                </h1>
                <div>
                    <input type="text" placeholder="Enter Your Phone No." className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
                    <button className="bg-orange-600 hover:bg-orange-300 hover:text-black duration-300 px-5 py-2.5 font-[poppins]rounded-md text-white md:w-auto w-full">
                        Request Code
                    </button>
                    </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8  px-5 py-6">
                        <div>
                            <h2 className="text-2xl font bold pb-2 sm:pb-3">Travel With Us </h2>
                            <div>Blog</div>
                            <div>Privacy Policy</div>
                            <div>FAQ's</div>
                            <div>Contact</div>
                            
                        </div>
                        <div>
                            <h2 className="text-2xl font bold pb-2 sm:pb-3">Services</h2>
                            <div>Hotels</div>
                            <div>Cars</div>
                            <div>Operators</div>
                            <div>Flight</div>
                            
                        </div>
                        <div>
                            <h2 className="text-2xl font bold pb-2 sm:pb-3">Quick Link</h2>
                            <div>Style Guide</div>
                            <div>Career</div>
                            <div>Help Text</div>
                            
                        </div>
                        <div>
                            <h2 className="text-2xl font bold pb-2 sm:pb-3">Contact Us</h2>
                            <div><i className="fa fa-map-marker "></i>1st Floor, Math Choumuhuni, Near Iskcon Tample
                            Agartala, West | Tripura  - 799001 India</div>
                            <div>8794113218 | 7005116152</div>
                            
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-5">
                        <span>@ 2024 Appy. All rights reserved.</span>
                        <span>Terms . Privacy Policy</span>
                        <span >Follow US
                            <div>
                                <i className="fa fa-whatsapp pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-facebook-square pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-instagram pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-linkedin pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-twitter-square pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-google pr-3 sm:pr-5 text-white text-3xl"></i>
                                <i className="fa fa-youtube-play pr-3 sm:pr-5 text-white text-3xl"></i>
                                
                            </div>
                        </span>
                       
                       
                    </div>
                    </div>

                    <div className=" bg-orange-600 h-10 text-white">
                        <div className="flex flex-wrap">
                            <div className="w-1/2 pl-16 sm:pl-24">
                                <span> Copyright <i className="fa fa-copyright"></i> 2024</span>
                            </div>

                            <div className="w-1/2  text-right pr-16 sm:pr-24">
                                <span> Get best deals from Tripmydeal</span>
                            </div>

                        </div>
                    </div>
       </footer>
      
        </>
    );
}
export default Footer;