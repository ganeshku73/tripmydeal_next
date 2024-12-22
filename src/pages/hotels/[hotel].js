
import { useRouter } from 'next/router';

import SliderWithThumbnails from './../common/SliderWithThumbnails';
import Footer from "./../common/footer";
import Header from "./../common/header";
import RoomList from '../common/hotelRooms';
import axios from "axios";
import { useState,useEffect } from "react";
import FormToggle from '../FormToggle';
import Modal from '../common/enquery_model';
import RelatedHotelList from '../common/relatedHotels';
import API_BASE_URL from '@/config';

function HotelDetaile() {
    
    const router = useRouter();
    const [hotelDetail, setHotelData] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [relatedHotel, setRelatedHotel] = useState([]);
    const [hotelGallery, setHotelGallery] = useState([]);
    const [hotelFacilities, setFacilities] = useState([]);
    const [hotelService, setService] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    var token ='';
    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
      } else {
        token = '';
      }


    useEffect(() => {
        const { hotel } = router.query;
        //console.log(`Fetching data for hotel: ${hotel}`);
        
        const fetchHotel = async () =>{
            
            if(hotel !=undefined){
                console.log(hotel);
                const response = await fetch(`${API_BASE_URL}/hotel/hotel-list/${hotel}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                      },
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch hotel data');
                }else{
                    const data = await response.json();
                    setHotelData(data.result); // Set hotel data
                    setFacilities(data.result.facilities); // Set hotel data
                    setService(data.result.hotel_service); // Set hotel data
                    
                    if (typeof data.result.gallery === 'string') {
                        const galleryArray = data.result.gallery.split(',');
                        setHotelGallery(galleryArray);
                        
                    } else if (Array.isArray(data.result.gallery)) {
                        
                        setHotelGallery(data.result.gallery);
                    } else {
                        setHotelGallery([]);
                    }
                    setRooms(data.rooms || []); // Set rooms data
                    setRelatedHotel(data.relatedHotels || []); // Set rooms data
                    
                    //console.log(`rooms ${data.rooms}`);
                }

                
            }
           
        }
            
         fetchHotel();   
      }, [router.query]);

      console.log(hotelGallery);
      const renderRatingStars = (rating) => {
        const numStars = parseInt(rating); // Convert rating to integer
        const stars = [];
    
        for (let i = 0; i < 5; i++) {
            if(i<numStars-1){
                stars.push(<span className="text-orange-600" key={i}>&#9733;</span>); // Unicode for star character
            }else{
                stars.push(<span className="text-gray-600" key={i}>&#9733;</span>); // Unicode for star character
            
            }
         }
    
        return stars;
      };

    var review = [];
    for (var i = 0; i < 5; i++) {
        review.push(<i className="fa fa-star pl-1"></i>);
    }

    var star = [];
    for (var i = 0; i < 5; i++) {
        star.push(<i class="fa fa-star-o pl-1"></i>)
    }
    const renderSlider = hotelDetail.gallery && hotelDetail.gallery.length > 0;
    
      return (
        <>

        <Header/>
      
        
        
        <div className="container mx-auto mt-12 sm:mt-16 minheight">
        <div className="flex flex-wrap justify-center">
  
          <div className="grid grid-cols-12  gap-8">
            <div className="col-span-12 sm:col-span-9 ">
                <div className="flex flex-wrap mb-1 sm:mb-2 m-2">
                
                <div className=" w-2/3 ">
                    <h1 className=" text-orange-600 text-lg">
                    {renderRatingStars(hotelDetail.hotel_rating_standard)}  
                    
                    </h1>
                    <h1 className="  text-3xl font-bold text-gray-600">{hotelDetail.hotel_name} Hotel</h1>
                    <div className=" text-lg"><i className="fa fa-map-marker "></i> {hotelDetail.real_address} </div>
                </div>

                <div className=" w-1/3">
                    <div className=''>
                    <span className=" text-lg font-bold text-gray-600">Hotel Star:</span>
                    <span className="pl-1 sm:pl-2 font-bold text-orange-600">{hotelDetail.hotel_star} Star Hotel</span>
                    </div>
                
                    <div className='my-1 sm:my-1'>
                        <span className=" text-lg font-bold text-gray-600 ">Property Type:</span>
                        
                        {hotelDetail.property_type && hotelDetail.property_type.map((key, index) => (

                        <>
                                { (key == 'apartments') ? (<> <span  className="pl-1 text-orange-600 font-bold "> Apartments</span> </>) : ('')}
                                { (key == 'hotels') ? (<> <span  className="pl-1 text-orange-600 font-bold">Hotels</span></>) : ('')}
                                { (key == 'homestays') ? (<> <span  className="pl-1 text-orange-600 font-bold">Homestays</span></> ): ('')}
                                { (key == 'villas') ? (<><span  className="pl-1 text-orange-600 font-bold">Villas</span></>) : ('')}
                                { (key == 'boats') ? (<><span  className="pl-1 text-orange-600 font-bold">Boats</span></>) : ('')}
                                { (key == 'motels') ? (<><span  className="pl-1 text-orange-600 font-bold">Motels</span></> ): ('')}
                                { (key == 'resorts') ? (<><span  className="pl-1 text-orange-600 font-bold">Resorts</span></>) : ('')}
                                { (key == 'lodges' )? (<><span  className="pl-1 text-orange-600 font-bold">Lodges</span></>) : ('')}
                                { (key == 'holiday_homes') ? (<><span  className="pl-1 text-orange-600 font-bold">Holiday Homes</span></>) : ('')}
                                { (key == 'cruises') ? (<><span  className="pl-1 text-orange-600 font-bold">Cruises</span></>) : ('')}
                            </>   
                        
                        ))}
                                                                        
                    </div>
                    <div className=" "> from <span className="font-bold">₹ {hotelDetail.price}</span> /night</div>

                </div>
                </div>
                {/* Left column: Hotel image */}
                <div className="mb-4 md:mb-0 h-96">
                <div>
            {hotelGallery.length>1?(
                renderSlider && <SliderWithThumbnails images={hotelGallery} page={'hotel'}/>
            ):(
                <div className="content">
                    <div className=" mx-auto">
                        <div>
                            <div className="img-body">
                                <img src={`${API_BASE_URL}/hotel/${hotelGallery[0]}`} alt={`Slide ${hotelGallery[0]}`}  />
                            </div>
                        </div>        
                    </div>
                </div>
            ) }
                
               
                </div>
                
                </div>
            
               
            </div>
              
            
            <div className="col-span-12 sm:col-span-3  pl-5 relative my-10">
                {relatedHotel.length>0?(
                    <>
                        <div className="font-bold"><span className=" text-orange-600 "> | </span> RELATED HOTEL </div>
                        <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                        
                        <RelatedHotelList relatedHotel={relatedHotel}/>
                    </>
                ):''}
                
                
               

                {hotelFacilities.length>0?(
                    <>
                        <div>
                            <div className=" mt-5 sm:mt-7 font-bold"><span className="  text-orange-600"> | </span> FACILITIES </div>
                            <hr className="border-t-2 border-gray-500 my-4 sm:reltive sm:my-6" />   
                                {
                                    hotelFacilities.map((val,index)=>(
                                        <>
                                        <div>{(val == 'wake_up_call') ? (<> <span className="mb-3"><i className="fa fa-clock-o   "></i> Wake Up Call</span></>) : ('')}</div>
                                        <div>{(val == 'car_hire') ? (<> <span className="mb-3"><i className="fa fa-car  "></i> Car Hire</span></>) : ('')}</div>
                                        <div>{(val == 'flat_tv') ? (<> <span className="mb-3"><i className="fa fa-television   "></i> Flat TV</span></>) : ('')}</div>
                                        <div>{(val == 'ac') ? (<> <span className="mb-3"><i className="fa fa-window-maximize   "></i> AC</span></>) : ('')}</div>
                                        <div>{(val == 'coffee_and_tea') ? (<> <span className="mb-3"><i className="fa fa-coffee   "></i> Coffee & Tea</span></>) : ('')}</div>
                                        <div>{(val == 'bicycle_hire') ? (<> <span className="mb-3"><i className="fa fa-bicycle   "></i> Bicycle Hire</span></>) : ('')}</div>
                                        <div>{(val == 'laundry_and_dry_cleaning') ? (<> <span className="mb-3"><i className="fa fa-recycle  "></i> Laundry & Dry Cleaning</span></>) : ('')}</div>
                                        <div>{(val == 'internet_Wifi') ? (<> <span className="mb-3"><i className="fa fa-wifi   "></i> Internet – Wifi</span></>) : ('')}</div>
                                        <div>{(val == 'swiming_pool') ? (<> <span className="mb-3"><i className="fa fa-bath   "></i> Swiming Pool</span></>) : ('')}</div>
                                        <div>{(val == 'gym') ? (<> <span className="mb-3"><i className="fa fa-wheelchair-alt"></i> Gym</span></>) : ('')}</div>
                                        <div>{(val == 'play_area') ? (<> <span className="mb-3"><i className="fa fa-gamepad  "></i> Play Area</span></>) : ('')}</div>
                                        <div>{(val == 'parking') ? (<> <span className="mb-3"><i className="fa fa-product-hunt  "></i> Parking</span></>) : ('')}</div>
                            
                                        </>
                                        
                                    )
                                    )
                                }                         
                        </div>
                    </>
                ):''}
                

                <div className="font-bold mt-5"><span className=" text-orange-600 "> | </span>HOTEL SERVICE </div>
                <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                {
                   hotelService.map((val,index)=>(
                    <>
                         <div>{(val == 'hotel_transport') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Hotel transport services</span></>) : ('')}</div>
                         <div>{(val == 'free_luggage') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Free luggage deposit</span></>) : ('')}</div>
                         <div>{(val == 'laundry_services') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Laundry Services</span></>) : ('')}</div>
                         <div>{(val == 'tickets') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Tickets</span></>) : ('')}</div>
                         <div>{(val == 'fiesta_restaurant') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Fiesta Restaurant</span></>) : ('')}</div>
                         <div>{(val == 'pets_welcome') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i> Pets welcome</span></>) : ('')}</div>
                         <div>{(val == 'havana_lobby_bar') ? (<> <span className="mb-3"><i className="fa fa-check-circle-o"></i>Havana Lobby bar</span></>) : ('')}</div>
                    </>
                   )
                   )
                }
                     
                     <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                        Book Now
                    </button>
                    <Modal isOpen={isOpen} onClose={closeModal}>
                        
                    </Modal>
    
             {/*<button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-2 sm:mt-3">
                Book Now
              </button>*/}

              {/* <FormToggle /> */}
            </div>
            
          </div>
          
          
          </div>
          </div>

       
          

          <hr className="border-t-2 border-gray-500 " />    
          <div className="container mx-auto my-1 sm:my-2">
              <div className="flex flex-wrap pl-2 pr-2">
                <div className="grid grid-cols-12  gap-8">
                    <div className="col-span-12 sm:col-span-9 ">
                    
                        <h1 className="font-bold text-3xl mt-6 sm:mt-9">Description</h1>
                        <p className=" text-sm my-6"> {hotelDetail.content}</p>
                        <h1 className=" text-xl my-5">HIGHLIGHTS</h1>
                        <ul className=" pl-10 text-sm">
                            <li className="mb-5">{hotelDetail.highlight}</li>
                            
                        
                        </ul>
                       
                        
                        <h1 className="font-bold text-3xl">Available Rooms</h1>
                        {/* <div className=" text-center border-t-4 border-blue-500 bg-slate-200  py-3 sm:py-5 mt-3 sm:mt-5 border-l-2 border-l-gray-400 border-r-2 border-r-gray-400 border-b-2 border-b-gray-400 flex flex-wrap">
                            <div className="w-1/2 font-bold text-lg">BOOK </div>
                            <div className=" w-1/2 font-bold text-lg"> ENQUIRY</div>
                        </div>
                        <div className=" text-center mb-6 sm:mb-9 border-b-4 border-b-orange-600 bg-white   border-l-2 border-l-gray-400 border-r-2 border-r-gray-400 flex flex-wrap ">
                            <div className="w-1/3 border-r-2 border-r-gray-400">Check In - Out <br></br>Please select <i className="fa fa-sort-desc justify-end"></i></div>
                            <div  className="w-1/3 border-r-2 border-r-gray-400">Guests  <br></br>1 Adult - 0 Child  <i className="fa fa-sort-desc justify-end"></i></div>
                            <div  className="w-1/3  bg-orange-600 pt-2 sm:pt-3 text-white">CHECK AVAILABILITY</div>
                        </div> */}


                        <RoomList rooms={rooms} />
                        

                        <h1 className="font-bold text-3xl my-6 sm:my-9">Rules</h1>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Check In</div>
                                <div className=" w-2/3">{hotelDetail.time_for_check_in}</div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Check Out</div>
                                <div className=" w-2/3">{hotelDetail.time_for_check_out}</div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3">Hotel Policies</div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Guarantee Policy</span><br></br>
                                    {hotelDetail.guarantee_policy}
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Children Policy</span><br></br>
                                    {hotelDetail.children_policy}
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Cancellation/Amendment Policy</span><br></br>
                                {hotelDetail.cancellation_policy}
                                </div>
                        </div>

                        <div className=" flex flex-wrap my-2 sm:my-3">
                                <div className=" w-1/3"></div>
                                <div className=" w-2/3 text-sm"><span className="font-bold text-lg text-gray-800">Late check-out policy</span><br></br>
                                {hotelDetail.late_check_out_policy}
                                </div>
                        </div>
                        <hr className="border-t-1 border-gray-500 my-8 sm:my-12" />
                        <div className=" flex flex-wrap my-2 sm:my-3">
                            <h1 className="font-bold text-3xl  w-1/2 text-left">Location</h1>
                            <h1 className="w-1/2 text-right"> <i className="fa fa-location-arrow  "></i>{hotelDetail.real_address} </h1>
                        </div>
                        <div>
                            
                            <div dangerouslySetInnerHTML={{ __html: hotelDetail.the_geographic_coordinate }} />
                        </div>
                        
                        <hr className="border-t-1 border-gray-500 my-4 sm:my-6" />

                       


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