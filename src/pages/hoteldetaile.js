
import BannerSlider from "./common/bannerslider";
import SliderWithThumbnails from './common/SliderWithThumbnails';
import Footer from "./common/footer";
import Header from "./common/header";

const images = [
    '/destination-1.jpg',
    '/destination-1.jpg',
    '/destination-3.jpg',
    '/destination-4.jpg',
    '/destination-5.jpg'
  ];




function HotelDetaile  () {
    var review = [];
    for (var i = 0; i < 5; i++) {
        review.push(<i className="fa fa-star pl-1"></i>);
    }

    var star = [];
    for (var i = 0; i < 5; i++) {
        star.push(<i class="fa fa-star-o pl-1"></i>)
    }
    
    
      return (
        <>

        <Header/>
        <BannerSlider/>
        

        <div className="container mx-auto mt-2 sm:mt-3">
        <div className="flex flex-wrap justify-center">
  
          <div className="grid grid-cols-12  gap-8">
          <div className="col-span-12 sm:col-span-9 ">
            <div className="flex flex-wrap mb-1 sm:mb-2 ">
            
            <div className=" w-4/5 ">
                <h1 className=" text-orange-600">
                   {review}
                   
                </h1>
                <h1 className="  text-3xl font-bold">Rajhansh Hotel</h1>
                <div className=" text-lg"><i className="fa fa-map-marker "></i>  Regal Cinemas Battery</div>
            </div>

            <div className=" w-1/5">
                <div className="text-2xl pr-2">Excellent <br></br><span className=" text-orange-600 text-sm">From 4 reviews</span><span className=" bg-orange-600 rounded-md p-1 sm:p-2 ml-2 sm:ml-3">4.8/5</span></div>
                <div className=" text-sm mt-1 sm:mt-2">100% guests recommend</div>
            </div>
            </div>
            {/* Left column: Hotel image */}
            <div className="mb-4 md:mb-0 h-96">
            <div>
            <SliderWithThumbnails images={images} />
            <hr className="border-t-2 border-gray-500 " />
            </div>
            
            </div>
           
           
            </div>
           
    
            {/* Right column: Hotel details */}
            
            <div className="col-span-12 sm:col-span-3  pl-5 my-10">
                <div className="font-bold"><span className=" text-orange-600 "> | </span> RELATED HOTEL </div>
                <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                <div  className="flex flex-wrap">
                    <div className=" w-1/3">
                        <img src="/space-11.jpg" alt="" className=" w-24"/>
                    </div>

                    <div className=" w-2/3 pl-2">
                        <h1 className=" text-orange-600"> {review}</h1>
                        <h1 className=" text-orange-600 ">Crowne Plaza Hotel</h1>
                        <div>from ₹ 900 /night</div>
                    </div>
                </div>
                <div className="font-bold mt-5"><span className=" text-orange-600 "> | </span> FACILITIES </div>
                <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                <div className="">
                    <div className="mb-3"> <i className="fa fa-clock-o  "></i>  Wake-up call</div>
                    <div className="mb-3"><i className="fa fa-car  "></i>  Car hire</div>
                    <div className="mb-3"><i className="fa fa-bicycle  "></i>  Bicycle hire</div>
                    <div className="mb-3"><i className="fa fa-television  "></i> Flat Tv</div>
                    <div className="mb-3"><i className="fa fa-recycle  "></i> Laundry and dry cleaning</div>
                    <div className="mb-3"><i className="fa fa-wifi  "></i> Internet – Wifi</div>
                    <div className="mb-3"><i className="fa fa-coffee "></i> Coffee and tea</div>
                   
                </div>

                <div className="font-bold mt-5"><span className=" text-orange-600 "> | </span>HOTEL SERVICE </div>
                <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                <div className="">
                    <div className="mb-3"> <i class="fa fa-check-circle-o"></i>  Hotel transport services</div>
                    <div className="mb-3"> <i class="fa fa-check-circle-o "></i>  Free luggage deposit</div>
                    <div className="mb-3"> <i class="fa fa-check-circle-o "></i> Laundry Services</div>
                    <div className="mb-3"> <i class="fa fa-check-circle-o "></i>  Tickets</div>   
                </div>
    
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Book Now
              </button>
            </div>
          </div>
          
          </div>
          </div>

          <div className="container mx-auto my-1 sm:my-2">
              <div className="flex flex-wrap ">
                <div className="grid grid-cols-12  gap-8">
                    <div className="col-span-12 sm:col-span-9 ">
                    
                        <h1 className="font-bold text-3xl mt-6 sm:mt-9">Description</h1>
                        <p className=" text-sm my-6">Built in 1986, Hotel Stanford is a distinct addition to New York (NY) and a smart choice for travelers. The excitement of the city center is only 0 KM away. No less exceptional is the hotel’s easy access to the city’s myriad attractions and landmarks, such as Toto Music Studio, British Virgin Islands Tourist Board, L’Atelier Du Chocolat. Start and end in San Francisco! With the in-depth cultural tour Northern California Summer 2019, you have a 8 day tour package taking you through San Francisco, USA and 9 other destinations in USA. Northern California Summer 2019 includes accommodation as well as an expert guide, meals, transport and more.</p>
                        <h1 className=" text-xl my-5">HIGHLIGHTS</h1>
                        <ul className=" pl-10 text-sm">
                            <li className="mb-5">Visit the Museum of Modern Art in Manhattan</li>
                            <li className="mb-5">See amazing works of contemporary art, including Vincent van Gogh's The Starry Night</li>
                            <li className="mb-5">Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse</li>
                            <li className="mb-5">Behold masterpieces by Gauguin, Dali, Picasso, and Pollock</li>
                            <li className="mb-5">Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese</li>
                        </ul>
                        <h1 className="font-bold text-3xl">Available Rooms</h1>
                        <div className=" text-center border-t-4 border-blue-500 bg-slate-200  py-3 sm:py-5 mt-3 sm:mt-5 border-l-2 border-l-gray-400 border-r-2 border-r-gray-400 border-b-2 border-b-gray-400 flex flex-wrap">
                            <div className="w-1/2 font-bold text-lg">BOOK </div>
                            <div className=" w-1/2 font-bold text-lg"> ENQUIRY</div>
                        </div>
                        <div className=" text-center mb-6 sm:mb-9 border-b-4 border-b-orange-600 bg-white   border-l-2 border-l-gray-400 border-r-2 border-r-gray-400 flex flex-wrap ">
                            <div className="w-1/3 border-r-2 border-r-gray-400">Check In - Out <br></br>Please select <i className="fa fa-sort-desc justify-end"></i></div>
                            <div  className="w-1/3 border-r-2 border-r-gray-400">Guests  <br></br>1 Adult - 0 Child  <i className="fa fa-sort-desc justify-end"></i></div>
                            <div  className="w-1/3  bg-orange-600 pt-2 sm:pt-3 text-white">CHECK AVAILABILITY</div>
                        </div>

                        <div className=" border-2 border-gray-400 mt-3 sm:mt-5  flex flex-wrap ">
                            <img src="/destination-1.jpg" className=" w-1/4" />
                            <div className=" w-3/4">
                                <div className=" pl-8 sm:pl-12 pt-3 sm:pt-5 font-bold text-lg text-orange-600">Room Kerama Islands</div>
                                <div className=" flex flex-wrap mt-2 sm:mt-3">
                                    <span><i className="fa fa-area-chart  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><span className="ml-7 sm:ml-9">200 sqft</span></span> 
                                    <span><i className="fa fa-hotel   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>5</span> 
                                    <span><i className="fa fa-users   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                    <span><i className="fa fa-child   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                </div>
                                <div className="flex flex-wrap my-2 sm:my-3">
                                    <div><i className="fa fa-clock-o  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-recycle  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-wifi  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-coffee ml-6 sm:ml-9  border-2 border-gray-400 p-1 sm:p-2 rounded "></i></div>
                                </div>
                            </div> 
                        </div>

                         <div className=" border-b-2 border-b-gray-400 my-2 sm:my-3 border-r-2 border-r-gray-400 border-l-2 border-l-gray-400   border-t-2 border-t-gray-400 flex flex-wrap ">
                            <img src="/destination-2.jpg" className=" w-1/4" />
                            <div className=" w-3/4">
                                <div className=" pl-8 sm:pl-12 pt-3 sm:pt-5 font-bold text-lg text-orange-600">Room Sheraton Hotel</div>
                                <div className=" flex flex-wrap mt-2 sm:mt-3">
                                    <span><i className="fa fa-area-chart  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><span className="ml-7 sm:ml-9">200 sqft</span></span> 
                                    <span><i className="fa fa-hotel   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>5</span> 
                                    <span><i className="fa fa-users   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                    <span><i className="fa fa-child   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                </div>
                                <div className="flex flex-wrap my-2 sm:my-3">
                                    <div><i className="fa fa-recycle  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-wifi  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-coffee ml-6 sm:ml-9  border-2 border-gray-400 p-1 sm:p-2 rounded "></i></div>
                                </div>
                            </div> 
                        </div>

                         <div className=" border-b-2 border-b-gray-400  my-2 sm:my-3 border-r-2 border-r-gray-400 border-l-2 border-l-gray-400 border-t-2 border-t-gray-400 flex flex-wrap ">
                            <img src="/destination-3.jpg" className=" w-1/4 " />
                            
                             <div className=" w-3/4">
                                <div className=" pl-8 sm:pl-12 pt-3 sm:pt-5 font-bold text-lg text-orange-600">Double Room With Town View</div>
                                <div className=" flex flex-wrap mt-2 sm:mt-3">
                                    
                                    <span><i className="fa fa-area-chart  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><span className="ml-7 sm:ml-9">200 sqft</span></span> 
                                    <span><i className="fa fa-hotel   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>5</span> 
                                    <span><i className="fa fa-users   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                    <span><i className="fa fa-child   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                </div>
                                <div className="flex flex-wrap my-2 sm:my-3">
                                    <div><i className="fa fa-television  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-recycle  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-wifi  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-coffee ml-6 sm:ml-9  border-2 border-gray-400 p-1 sm:p-2 rounded "></i></div>
                                </div>
                            </div> 
                                
                        </div>

                         <div className=" border-b-2 border-b-gray-400 my-2 sm:my-3 border-r-2 border-r-gray-400 border-l-2 border-l-gray-400 border-t-2 border-t-gray-400 flex flex-wrap ">
                            <img src="/destination-4.jpg" className=" w-1/4" />
                            <div className=" w-3/4">
                                <div className=" pl-8 sm:pl-12 pt-3 sm:pt-5 font-bold text-lg text-orange-600">Standard Double Room</div>
                                <div className=" flex flex-wrap mt-2 sm:mt-3">
                                    <span><i className="fa fa-area-chart  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><span className="ml-7 sm:ml-9">200 sqft</span></span> 
                                    <span><i className="fa fa-hotel   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>5</span> 
                                    <span><i className="fa fa-users   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                    <span><i className="fa fa-child   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="fa fa-times pl-8 sm:pl-12"></i>6</span> 
                                </div>
                                <div className="flex flex-wrap my-2 sm:my-3">
                                    <div><i className="fa fa-clock-o  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-television  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-recycle  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-wifi  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i></div>
                                    <div><i className="fa fa-coffee ml-6 sm:ml-9  border-2 border-gray-400 p-1 sm:p-2 rounded "></i></div>
                                </div>
                            </div> 
                                
                        </div> 

                        <h1 className="font-bold text-3xl my-6 sm:my-9">Rules</h1>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Check In</div>
                                <div className=" w-2/3">12:00AM</div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Check Out</div>
                                <div className=" w-2/3">11:00AM</div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Hotel Policies</div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Guarantee Policy</span><br></br>
                                    - A valid credit card will be required upon booking;<br></br>
                                    - For credit card reservations, the same card(s) must be presented upon check in at the respective hotels;<br></br>
                                    - Management reserves the right to cancel any reservations without notice if we are notified of any fraud or illegal activities associated with the full payments received.
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Children Policy</span><br></br>
                                    - Child under 5-year old: free of charge.<br></br>
                                    - Child from 5-year old to under 12-year old: surcharge $10/person/room/night.<br></br>
                                    - Child from 12-year old or extra Adult: surcharge $15/person/room/night.
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Cancellation/Amendment Policy</span><br></br>
                                    - If cancellation/amendment is made 72 hours prior to your arrival date, no fee will be charged.<br></br>
                                    - If cancellation/amendment is made within 72 hours, including reservations made within 72 hours of your arrival, 1st night’s room rate and tax will be charged<br></br>
                                    - In case of no-show, 100% room rate and tax will be charged.<br></br>
                                    - Early Bird/Long Stay/Last Min/Package Rates are Non - changeable & Non - refundable
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Late check-out policy</span><br></br>
                                    - Late check-out is subject to room availability<br></br>
                                    - 12:00 to 17:00 check-out: 50% room rate surcharge<br></br>
                                    - After 17:00 check-out: 100% room rate surcharge
                                </div>
                        </div>
                        <hr className="border-t-1 border-gray-500 my-8 sm:my-12" />
                        <div className=" flex flex-wrap my-2 sm:my-3">
                            <h1 className="font-bold text-3xl  w-1/2 text-left">Location</h1>
                            <h1 className="w-1/2 text-right"> <i className="fa fa-location-arrow  "></i> Regal Cinemas Battery</h1>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.249474238238!2d77.147745!3d28.43057805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21d5260fbbc3%3A0xadee68ce0e3bf249!2sGwal%20Pahari%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1719295950461!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                        <hr className="border-t-1 border-gray-500 my-4 sm:my-6" />

                        <h1 className="font-bold text-3xl my-6 sm:my-9">Reviews</h1>
                        <div className="flex flex-wrap  border-2 border-gray-400 py-6 sm:py-9">
                            <div className="w-2/8 px-10 sm:px-16">
                                <div className=" text-6xl text-orange-600 mb-1 sm:mb-2"> 4.8<span className="text-orange-600 text-2xl">/5</span></div>
                                <div className=" text-3xl  mb-1 sm:mb-2"> Excellent</div>
                                <div>Based on <span className=" text-orange-600"> 4 reviews</span></div>
                                <div className="border-r-2 border-r-gray-400"></div>
                              

                            </div>

                                <div className=" border-r-2 border-r-gray-400"></div>

                            <div className="w-6/8 px-16 sm:px-24 ">
                                
                                <div className="mb-1 sm:mb-2">Excellent
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="100"
                                    className=" w-80 ml-4 sm:ml-6"
                                    />
                                    <span className="pl-2 sm:pl-3"> 3</span>
                                </div>
                                <div className="mb-1 sm:mb-2">Very Good
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="100"
                                    className=" w-80 ml-2 sm:ml-3"
                                    />
                                      <span className="pl-2 sm:pl-3"> 1</span>
                                </div>
                                <div className="mb-1 sm:mb-2">Average
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="100"
                                     className=" w-80 ml-5 sm:ml-8"
                                    />
                                      <span className="pl-2 sm:pl-3"> 0</span>
                                </div>
                                <div className="mb-1 sm:mb-2">Poor
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="100"
                                    className=" w-80 ml-9 sm:ml-14"
                                    />
                                      <span className="pl-2 sm:pl-3"> 0</span>
                                </div>
                                <div className="mb-1 sm:mb-2">Terrible
                                <input
                                    type="range"
                                    min="0"
                                    max="1000"
                                    step="100"
                                    className=" w-80 ml-6 sm:ml-9"
                                    />
                                      <span className="pl-2 sm:pl-3"> 0</span>
                                </div>
                            </div>
                        </div>

                        <hr className="border-t-1 border-gray-500 my-8 sm:my-12" />

                        <div>
                            <div className="flex flex-wrap">
                                <i class="fa fa-user-circle text-3xl"></i>
                                <span className="pl-2 sm:pl-3"> 04/06/2024    18:20</span>
                            </div>

                            <div className="font-bold">Beautiful spot with a lovely view</div>
                            <div className="text-orange-600 my-1 sm:my-2">{review}</div>
                            <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
                        </div>

                        <hr className="border-t-1 border-gray-500 my-6 sm:my-9" />


                        <div>
                            <div className="flex flex-wrap">
                                <i class="fa fa-user-circle text-3xl"></i>
                                <span className="pl-2 sm:pl-3"> 25/05/2024    10:30</span>
                            </div>

                            <div className="font-bold">Easy way to discover the city </div>
                            <div className="text-orange-600 my-1 sm:my-2">{review}</div>
                            <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
                        </div>

                        <hr className="border-t-1 border-gray-500 my-6 sm:my-9" />


                        <div>
                            <div className="flex flex-wrap">
                                <i class="fa fa-user-circle text-3xl"></i>
                                <span className="pl-2 sm:pl-3"> 10/05/2024    08:20</span>
                            </div>

                            <div className="font-bold">Beautiful spot with a lovely view</div>
                            <div className="text-orange-600 my-1 sm:my-2">{review}</div>
                            <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
                        </div>

                        <hr className="border-t-1 border-gray-500 my-6 sm:my-9" />



                        <div>
                            <div className="flex flex-wrap">
                                <i class="fa fa-user-circle text-3xl"></i>
                                <span className="pl-2 sm:pl-3"> 24/04/2024    15:20</span>
                            </div>

                            <div className="font-bold">Beautiful spot with a lovely view</div>
                            <div className="text-orange-600 my-1 sm:my-2">{review}</div>
                            <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
                        </div>

                        <hr className="border-t-1 border-gray-500 my-4 sm:my-6" />

                        <div className=" text-right">Showing 1 - 4 of 4 total</div>
                        <div className=" text-left">Write a review</div>

                        <div className="border-2 border-gray-400  rounded p-6 sm:p-9">
                            <input type="text" placeholder="Title" name="title" className="border-2 rounded border-gray-200 w-full py-1 sm:py-1mb-6 sm:mb-9 pl-2 sm:pl-3"/>
                            <div className="flex flex-wrap ">
                                <div className="w-8/12 pr-2">
                                    <textarea  type="text" placeholder="Review Content" className=" h-96 w-full rounded border-2 border-gray-200 pl-2 sm:pl-3 "/>
                                </div>
                                <div className="w-4/12  border-2 bg-white rounded pl-4 sm:pl-6 pt-4  sm:pt-6 border-gray-200">
                                    <h1 className="pb-1 sm:pb-1">Service</h1>
                                    <h1 className="pb-1 sm:pb-1"> {star}</h1>
                                    <h1 className="pb-1 sm:pb-1">Organization</h1>
                                    <h1 className="pb-1 sm:pb-1"> {star}</h1>
                                    <h1 className="pb-1 sm:pb-1">Friendliness</h1>
                                    <h1 className="pb-1 sm:pb-1"> {star}</h1>
                                    <h1 className="pb-1 sm:pb-1">Area Expert</h1>
                                    <h1 className="pb-1 sm:pb-1"> {star}</h1>
                                    <h1 className="pb-1 sm:pb-1">Safety</h1>
                                    <h1 className="pb-1 sm:pb-1"> {star}</h1>
                                </div>
                                <button className="bg-orange-600 text-white mt-1 sm:mt-2 p-1 sm:p-1 px-2 sm:px-3 rounded ml-72 sm:ml-96"> Leave a Review</button>

                            </div>

                        </div>


                    </div>
                </div>
              </div>
             </div>
     

      <Footer/>
        </>
    // Example hotel room images data
  

   
      
    );
}
export default HotelDetaile;