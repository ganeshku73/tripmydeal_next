import Footer from "./common/footer";
import Header from "./common/header";
import BannerSlider from "./common/bannerslider";
import axios from "axios";
import { useState,useEffect } from "react";
function Hotels(){
    const [Hotels, setHotelData] = useState([]);
    var token = '';

    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
      } else {
        token = '';
      }


      const fetchHotelsData = async ()=>{
        {
           await axios.get(`http://localhost:80/hotel/hotel-list`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then((response)=>{
                if(response != ''){
                  if(response.data.status!=0){
                    setHotelData(response.data.result);
                  }
                }
              }).catch(error => console.log(error));
          }
      }
      useEffect(() => {
        fetchHotelsData();
      },[])
     



    var review = [];
    for (var i = 0; i < 5; i++) {
        review.push(<i className="fa fa-star pl-1"></i>);
    }

    var Fourstar = [];
    for (var i = 0; i < 4; i++) {
        Fourstar.push(<i className="fa fa-star pl-1"></i>);
    }

    var Threestar = [];
    for (var i = 0; i < 3; i++) {
        Threestar.push(<i className="fa fa-star pl-1"></i>);
    }

    var Twostar = [];
    for (var i = 0; i < 2; i++) {
        Twostar.push(<i className="fa fa-star pl-1"></i>);
    }

    return(
      
        <>
        <Header/>
        <BannerSlider/>
        
   
    <div className="container mx-auto">
        
            <div className="grid grid-cols-12  gap-8 mt-6 sm:mt-9">
                <div className="col-span-12 sm:col-span-3 ">
                    <div className="border-2 border-gray-300 ">
                        <div className="text-xl font-bold px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">Filter By</div>
                        <hr className="border-t-2 border-gray-300 " />

                        <div className="px-4 sm:px-6 pt-4 sm:pt-6 font-semibold">Filter Price<i className="fa fa-chevron-circle-up text-end"></i></div>
                        <div className="px-4 sm:px-6 ">process bar</div>
                        <div className="px-4 sm:px-6 font-semibold text-orange-600 pb-4 sm:pb-6">APPLY</div>
                        <hr className=" border-t-2 border-gray-300 " />

                        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Star<i className="fa fa-chevron-circle-up text-end"></i></div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{review}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{Fourstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{Threestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />    
                            <h1 className="text-orange-600">{Twostar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600"><i className="fa fa-star"></i></h1>
                        </div>
                    
                    <hr className=" border-t-2 border-gray-300 " />

                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Review Score<i className="fa fa-chevron-circle-up text-end"></i></div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{review}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{Fourstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{Threestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600">{Twostar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1 className="text-orange-600"><i className="fa fa-star"></i></h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />

                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Property type<i className="fa fa-chevron-circle-up text-end"></i></div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Apartments</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Hotels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Homestays</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Villas</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Boats</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Motels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Resorts</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Lodges</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Holiday homes</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Cruises</h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />

                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Facilities<i className="fa fa-chevron-circle-up text-end"></i></div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Wake-up call</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Car hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Bicycle hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Flat Tv</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Laundry and dry cleaning</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Internet – Wifi</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                            <h1>Coffee and tea</h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />

                        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Service<i className="fa fa-chevron-circle-up text-end"></i></div>
                     
                            <div className="flex flex-wrap mb-1 sm:mb-2"  >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                <h1>Havana Lobby bar</h1>
                            </div >
                            <div className="flex flex-wrap mb-1 sm:mb-2" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                <h1>Fiesta Restaurant</h1>
                            </div>
                            <div className="flex flex-wrap mb-1 sm:mb-2" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                 <h1>Hotel transport services</h1>
                            </div>
                            <div className="flex flex-wrap mb-1 sm:mb-2" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                 <h1>Free luggage deposit</h1>
                            </div>
                            <div className="flex flex-wrap mb-1 sm:mb-2" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                <h1>Laundry Services</h1>
                            </div>
                            <div className="flex flex-wrap mb-1 sm:mb-2" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                <h1>Pets welcome</h1>
                            </div>
                            <div className="flex flex-wrap mb-4 sm:mb-6" >
                                <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" />
                                <h1>Tickets</h1>
                            </div>
                       
                     </div>    
                   
                </div>
                  
             

                <div className="col-span-12 sm:col-span-9 ">
                    <div className="flex flex-wrap">
                        <div className="text-left font-bold text-2xl w-1/2">6 hotels found</div>
                        <div className=" w-1/2 text-end">show on the map | sort by: <button className="bg-white border-2 border-gray-300 px-2 sm:px-3 py-1 sm:py-2 ">recommended <i className="fa fa-sort-desc"></i></button> </div>
                    </div>
                        <div>
                            {
                                Hotels.map((val,key)=>{
                                    return(
                                        <a href="javascript:void(0)" className=" border-b-2 border-b-gray-300 my-2 sm:my-3 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300   border-t-2 border-t-gray-300 flex flex-wrap ">
                               
                                            <img src="/destination-1.jpg" className=" w-1/4" />
                                            <div className=" w-2/4 pl-2 sm:pl-3 pt-3 sm:pt-5 border-r-2 border-r-gray-300 "> 
                                                <h1 className=" text-orange-600"> {review}  </h1>
                                                <div className="font-bold text-lg"> {val.hotel_name}</div>
                                                <div><i class="fa fa-diamond"></i> Facilities:  {JSON.parse(val.facilities)}</div>
                                                
                                            </div>
                                            
                                            <div className="w-1/4 ">
                                                <div className=" flex flex-wrap">
                                                    <div className="text-lg pl-10 sm:pl-16  pt-2 sm:pt-3 w-3/4">
                                                        <div className="pl-6 sm:pl-9">Excellent</div> 
                                                        <div className=" text-orange-600 text-sm pl-2 sm:pl-3">From 4 reviews</div>
                                                    </div>
                                                    <div className=" w-1/4 pt-4 sm:pt-6">
                                                        <span className=" bg-orange-600 text-white rounded-md p-1 sm:p-2">4.8<span className=" text-sm">/5</span></span>
                                                    </div>
                                                
                                                </div>
                                                
                                                
                                                <div className="pt-10 sm:pt-16 pl-16 sm:pl-24"> from <span className="font-bold">₹ {val.price}</span> /night</div>

                                            </div>
                                        
                                        </a>            
                                    )
                                })
                            }
                           
                            

                           
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-1/2 text-right">
                                <i className="fa fa-chevron-left pr-8 sm:pr-12 mt-2 sm:mt-3"></i>
                                <button className="px-4 sm:px-6 py-1 sm:py-2 mx-1 sm:mx-2 rounded border-2 border-gray-500">1</button>
                             </div>
                             <div className="w-1/2 text-left">
                                <button className="px-4 sm:px-6 py-1 sm:py-2 mx-1 sm:mx-2 rounded border-2 border-gray-500 ">2</button>
                                <i className="fa fa-chevron-right pl-8 sm:pl-12 mt-2 sm:mt-3"></i>
                             </div>
                        </div>

                        <div className=" text-center">Showing 1 - 6 of 6 Hotels</div>

                </div>
            </div>
        </div>
  
      
        <Footer/>
        </>
    );
}
export default Hotels;