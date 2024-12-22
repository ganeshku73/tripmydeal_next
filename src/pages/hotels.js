import Footer from "./common/footer";
import Header from "./common/header";
import BannerSlider from "./common/bannerslider";
import axios from "axios";
import { useState,useEffect } from "react";
import API_BASE_URL from "@/config";
function Hotels(){
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [resultCount, setResultCount] = useState(0);
    const [Hotels, setHotelData] = useState([]);
    const [sorting, setSorting] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [apiUrl, setApiUrl] = useState(`${API_BASE_URL}/hotel/hotel-list`);
    const [filters, setFilters] = useState({
        propertyType: [],
        facilities: [],
        services:[],
        starRating: [],
        hotelRating: []
      });

    // Function to update filters
    
    const handlePropertyTypeChange = (ptype, isChecked)=> {
        if (isChecked) {
            // Add amenity to the filters state if it's checked
            setFilters(prevFilters => ({
              ...prevFilters,
              propertyType: [...prevFilters.propertyType, ptype]
            }));
          } else {
            // Remove amenity from the filters state if it's unchecked
            setFilters(prevFilters => ({
              ...prevFilters,
              propertyType: prevFilters.propertyType.filter(item => item !== ptype)
            }));
          }
    }

    const handleFacilitiesChange = (facility, isChecked)=> {
        if (isChecked) {
            // Add amenity to the filters state if it's checked
            setFilters(prevFilters => ({
              ...prevFilters,
              facilities: [...prevFilters.facilities, facility]
            }));
          } else {
            // Remove amenity from the filters state if it's unchecked
            setFilters(prevFilters => ({
              ...prevFilters,
              facilities: prevFilters.facilities.filter(item => item !== facility)
            }));
          }
    }

    const handleServicesChange = (Service, isChecked)=> {
        if (isChecked) {
            // Add amenity to the filters state if it's checked
            setFilters(prevFilters => ({
              ...prevFilters,
              services: [...prevFilters.services, Service]
            }));
          } else {
            // Remove amenity from the filters state if it's unchecked
            setFilters(prevFilters => ({
              ...prevFilters,
              services: prevFilters.services.filter(item => item !== Service)
            }));
          }
    }


    const handleHotelStarChange = (rating, isChecked)=> {
        if (isChecked) {
            // Add amenity to the filters state if it's checked
            setFilters(prevFilters => ({
              ...prevFilters,
              starRating: [...prevFilters.starRating, rating]
            }));
          } else {
            // Remove amenity from the filters state if it's unchecked
            setFilters(prevFilters => ({
              ...prevFilters,
              starRating: prevFilters.starRating.filter(item => item !== rating)
            }));
          }
    }  

    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    
    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };


    useEffect(() => {
        // Construct apiUrl whenever sorting or filters change
       // let url = `${apiUrl}?`;
        let url = `${API_BASE_URL}/hotel/hotel-list`;

        let queryParams = [];
       
        queryParams.push(`page=${currentPage}`);
        queryParams.push(`limit=15`);
        if (sorting) {
            queryParams.push(`sort_by=${sorting}`);
        }
        
        //add filter
        if (filters.starRating.length > 0) {
            queryParams.push(`starRating=${filters.starRating.join(',')}`);
        }
        if (filters.propertyType.length > 0) {
            queryParams.push(`propertyType=${filters.propertyType.join(',')}`);
        }
        if (filters.facilities.length > 0) {
            queryParams.push(`facilities=${filters.facilities.join(',')}`);
        }
        if (filters.services.length > 0) {
            queryParams.push(`services=${filters.services.join(',')}`);
        }

        // Append query parameters to URL
        if (queryParams.length > 0) {
            url += "?" + queryParams.join("&");
        }
        setApiUrl(url); // Update apiUrl state
        
    }, [sorting, filters,currentPage]);



    const handleSorting = async (event)=>{
       setSorting(event.target.value);
    }
    useEffect(() => {
        // Call fetchHotelsData whenever apiUrl changes
        if (apiUrl) {
            fetchHotelsData();
        }
    }, [apiUrl]); 

  const applyFilters = () => {
    fetchHotelsData();
  };

 


    var token = '';
    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
      } else {
        token = '';
      }


      const fetchHotelsData = async ()=>{
        {
           await axios.get(`${apiUrl}`,{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then((response)=>{
                if(response != ''){
                  if(response.data.status!=0){
                    setHotelData(response.data.result);
                    setResultCount(response.data.resultCount);
                    setTotalPages(response.data.totalPages);
                  }else{
                    setHotelData(response.data.result);
                    setResultCount(response.data.resultCount);
                    setTotalPages(response.data.totalPages);
                  }
                }else{
                    setHotelData([]);
                }
              }).catch(error => {
                // Handle errors
                console.log('Error fetching hotel data:', error);
                setHotelData([]); // Set hotel data to an empty array on error
                setResultCount(0);
            });
          }
      }
      useEffect(() => {
        fetchHotelsData();
      },[])
     
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

      const renderHotelRatingStars = (hotelrating) => {
        const numStars = parseInt(hotelrating); // Convert rating to integer
        const stars = [];
    
        for (let i = 0; i < 9; i++) {
            if(i<numStars){
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

    var Sixstar = [];
    for (var i = 0; i < 6; i++) {
        Sixstar.push(<i className="fa fa-star pl-1"></i>);
    }

    var Sevenstar = [];
    for (var i = 0; i < 7; i++) {
        Sevenstar.push(<i className="fa fa-star pl-1"></i>);
    }

    var Eightstar = [];
    for (var i = 0; i < 8; i++) {
        Eightstar.push(<i className="fa fa-star pl-1"></i>);
    }

    var Ninestar = [];
    for (var i = 0; i < 9; i++) {
        Ninestar.push(<i className="fa fa-star pl-1"></i>);
    }

    

    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    return(
      
        <>
        <Header/>
        <BannerSlider/>
        
         
         {popupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full p-4 rounded-md shadow-md">
                       
                    <div className="col-span-12 sm:col-span-12 block md:hidden ">
                    <div className="border-2 border-gray-300 overflow-y-auto max-h-96">
                    <div className="grid grid-cols-2 gap-4 px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">
      
                        <div>
                        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Star</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='9'
                            onChange={(e) => handleHotelStarChange('9', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Ninestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='8'
                            onChange={(e) => handleHotelStarChange('8', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Eightstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='7'
                            onChange={(e) => handleHotelStarChange('7', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Sevenstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='6'
                            onChange={(e) => handleHotelStarChange('6', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Sixstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='5'
                            onChange={(e) => handleHotelStarChange('5', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{review}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                             value='4'
                            onChange={(e) => handleHotelStarChange('4', e.target.checked)}
                             />
                            <h1 className="text-orange-600">{Fourstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='3'
                            onChange={(e) => handleHotelStarChange('3', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Threestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                             value='2'
                             onChange={(e) => handleHotelStarChange('2', e.target.checked)}
                            />    
                            <h1 className="text-orange-600">{Twostar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='1'
                           onChange={(e) => handleHotelStarChange('1', e.target.checked)}
                            />
                            <h1 className="text-orange-600"><i className="fa fa-star"></i></h1>
                        </div>
                        </div>
                        <div>
                   
                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Property type</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='apartments'
                            onChange={(e) => handlePropertyTypeChange('apartments', e.target.checked)}
                            />
                            <h1>Apartments</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='hotels'
                            onChange={(e) => handlePropertyTypeChange('hotels', e.target.checked)}
                            />
                            <h1>Hotels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='homestays'
                            onChange={(e) => handlePropertyTypeChange('homestays', e.target.checked)}
                            />
                            <h1>Homestays</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='villas'
                            onChange={(e) => handlePropertyTypeChange('villas', e.target.checked)}
                            />
                            <h1>Villas</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='boats'
                            onChange={(e) => handlePropertyTypeChange('boats', e.target.checked)}
                            />
                            
                            <h1>Boats</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='motels'
                            onChange={(e) => handlePropertyTypeChange('motels', e.target.checked)}
                            />
                            <h1>Motels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='resorts'
                            onChange={(e) => handlePropertyTypeChange('resorts', e.target.checked)}
                            />
                            <h1>Resorts</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='lodges'
                            onChange={(e) => handlePropertyTypeChange('lodges', e.target.checked)}
                            />
                            <h1>Lodges</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='holiday_homes'
                            onChange={(e) => handlePropertyTypeChange('holiday_homes', e.target.checked)}
                            />
                            <h1>Holiday homes</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='cruises'
                            onChange={(e) => handlePropertyTypeChange('cruises', e.target.checked)}
                            />
                            <h1>Cruises</h1>
                        </div>
                      
                    </div>
                    <div>
                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Facilities</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='wake_up_call'
                            onChange={(e) => handleFacilitiesChange('wake_up_call', e.target.checked)}
                            />
                            <h1>Wake-up call</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='car_hire'
                            onChange={(e) => handleFacilitiesChange('car_hire', e.target.checked)}
                            />
                            <h1>Car hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='bicycle_hire'
                            onChange={(e) => handleFacilitiesChange('bicycle_hire', e.target.checked)}
                            />
                            <h1>Bicycle hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='flat_tv'
                            onChange={(e) => handleFacilitiesChange('flat_tv', e.target.checked)}
                            />
                            <h1>Flat Tv</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='laundry_and_dry_cleaning'
                            onChange={(e) => handleFacilitiesChange('laundry_and_dry_cleaning', e.target.checked)}
                            />
                            <h1>Laundry and dry cleaning</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='internet_Wifi'
                            onChange={(e) => handleFacilitiesChange('internet_Wifi', e.target.checked)}
                            />
                            <h1>Internet – Wifi</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='coffee_and_tea'
                            onChange={(e) => handleFacilitiesChange('coffee_and_tea', e.target.checked)}
                            />
                            <h1>Coffee and tea</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='ac'
                            onChange={(e) => handleFacilitiesChange('ac', e.target.checked)}
                            />
                            <h1>AC</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='swiming_pool'
                            onChange={(e) => handleFacilitiesChange('swiming_pool', e.target.checked)}
                            />
                            <h1>Swiming Pool</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='gym'
                            onChange={(e) => handleFacilitiesChange('gym', e.target.checked)}
                            />
                            <h1>Gym</h1>
                        </div>
                        <div className="flex flex-wrap  mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='play_area'
                            onChange={(e) => handleFacilitiesChange('play_area', e.target.checked)}
                            />
                            <h1>Play Area</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='parking'
                            onChange={(e) => handleFacilitiesChange('parking', e.target.checked)}
                            />
                            <h1>Parking</h1>
                        </div>
                      
                        </div>
                        <div>
                     <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Services</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='havana_lobby_bar'
                            onChange={(e) => handleServicesChange('havana_lobby_bar', e.target.checked)}
                            />
                            <h1>Havana Lobby bar</h1>
                        </div> 

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='fiesta_restaurant'
                            onChange={(e) => handleServicesChange('fiesta_restaurant', e.target.checked)}
                            />
                            <h1>Fiesta Restaurant</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='hotel_transport'
                            onChange={(e) => handleServicesChange('hotel_transport', e.target.checked)}
                            />
                            <h1>Hotel transport</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='free_luggage'
                            onChange={(e) => handleServicesChange('free_luggage', e.target.checked)}
                            />
                            <h1>Free luggage</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='laundry_services'
                            onChange={(e) => handleServicesChange('laundry_services', e.target.checked)}
                            />
                            <h1>Laundry Services</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='pets_welcome'
                            onChange={(e) => handleServicesChange('pets_welcome', e.target.checked)}
                            />
                            <h1>Pets welcome</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='tickets'
                            onChange={(e) => handleServicesChange('tickets', e.target.checked)}
                            />
                            <h1>Tickets</h1>
                        </div>
                        
                    </div>
                    </div>
                        </div>
                        </div>
                        
                        
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-md mt-2" onClick={togglePopup}>
                          Close
                        </button>
                    </div>
                </div>
            )}

           

        
        <div className="fixed bottom-0 left-0 right-0 bg-orange-600 border-t border-gray-300 shadow-md py-3 px-4 sm:px-6 z-10 md:hidden">
            <div className="grid grid-cols-3 gap-2">
                {/* Filter options */}
                <div className="flex items-center justify-center mb-1" onClick={() => togglePopup()}>
                <div className="w-5 h-4 relative">
                    <i class="fa-solid fa fa-filter text-white"></i>
                </div>
                </div>

               
                
                <div className="flex items-right justify-center mb-1">
                    <div className="w-4 h-4 relative">
                        <a href="tel:8585960381"><i class="fa-solid fa fa-phone text-white"></i></a>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-1">
                <div className="w-4 h-4 relative">
                    <i class="fa-solid fa fa-whatsapp text-white"></i>
                </div>
                </div>
                {/* Add more filter options as needed */}

            </div>
        </div>
            
    <div className="container  sm:pr-3 sm:pl-3 mx-auto ">
        
            <div className="grid grid-cols-12  gap-8 mt-6 sm:mt-9">
                <div className="col-span-12 sm:col-span-3 hidden md:block">
                    <div className="border-2 border-gray-300 ">
                        <div className="py-4">
                        <span className="text-xl font-bold px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">Apply Filter</span>
                        </div>
                        <hr className="border-t-2 border-gray-300 " />

                        
                        <hr className=" border-t-2 border-gray-300 " />
                        
                        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Star</div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='9'
                            onChange={(e) => handleHotelStarChange('9', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Ninestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='8'
                            onChange={(e) => handleHotelStarChange('8', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Eightstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='7'
                            onChange={(e) => handleHotelStarChange('7', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Sevenstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='6'
                            onChange={(e) => handleHotelStarChange('6', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Sixstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='5'
                            onChange={(e) => handleHotelStarChange('5', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{review}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                             value='4'
                            onChange={(e) => handleHotelStarChange('4', e.target.checked)}
                             />
                            <h1 className="text-orange-600">{Fourstar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='3'
                            onChange={(e) => handleHotelStarChange('3', e.target.checked)}
                            />
                            <h1 className="text-orange-600">{Threestar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                             value='2'
                             onChange={(e) => handleHotelStarChange('2', e.target.checked)}
                            />    
                            <h1 className="text-orange-600">{Twostar}</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='1'
                           onChange={(e) => handleHotelStarChange('1', e.target.checked)}
                            />
                            <h1 className="text-orange-600"><i className="fa fa-star"></i></h1>
                        </div>
                    
                    <hr className=" border-t-2 border-gray-300 " />
                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Property type</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='apartments'
                            onChange={(e) => handlePropertyTypeChange('apartments', e.target.checked)}
                            />
                            <h1>Apartments</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2">
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='hotels'
                            onChange={(e) => handlePropertyTypeChange('hotels', e.target.checked)}
                            />
                            <h1>Hotels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='homestays'
                            onChange={(e) => handlePropertyTypeChange('homestays', e.target.checked)}
                            />
                            <h1>Homestays</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='villas'
                            onChange={(e) => handlePropertyTypeChange('villas', e.target.checked)}
                            />
                            <h1>Villas</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='boats'
                            onChange={(e) => handlePropertyTypeChange('boats', e.target.checked)}
                            />
                            
                            <h1>Boats</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='motels'
                            onChange={(e) => handlePropertyTypeChange('motels', e.target.checked)}
                            />
                            <h1>Motels</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='resorts'
                            onChange={(e) => handlePropertyTypeChange('resorts', e.target.checked)}
                            />
                            <h1>Resorts</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='lodges'
                            onChange={(e) => handlePropertyTypeChange('lodges', e.target.checked)}
                            />
                            <h1>Lodges</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='holiday_homes'
                            onChange={(e) => handlePropertyTypeChange('holiday_homes', e.target.checked)}
                            />
                            <h1>Holiday homes</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='cruises'
                            onChange={(e) => handlePropertyTypeChange('cruises', e.target.checked)}
                            />
                            <h1>Cruises</h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />

                    <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Facilities</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='wake_up_call'
                            onChange={(e) => handleFacilitiesChange('wake_up_call', e.target.checked)}
                            />
                            <h1>Wake-up call</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='car_hire'
                            onChange={(e) => handleFacilitiesChange('car_hire', e.target.checked)}
                            />
                            <h1>Car hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='bicycle_hire'
                            onChange={(e) => handleFacilitiesChange('bicycle_hire', e.target.checked)}
                            />
                            <h1>Bicycle hire</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='flat_tv'
                            onChange={(e) => handleFacilitiesChange('flat_tv', e.target.checked)}
                            />
                            <h1>Flat Tv</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='laundry_and_dry_cleaning'
                            onChange={(e) => handleFacilitiesChange('laundry_and_dry_cleaning', e.target.checked)}
                            />
                            <h1>Laundry and dry cleaning</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='internet_Wifi'
                            onChange={(e) => handleFacilitiesChange('internet_Wifi', e.target.checked)}
                            />
                            <h1>Internet – Wifi</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='coffee_and_tea'
                            onChange={(e) => handleFacilitiesChange('coffee_and_tea', e.target.checked)}
                            />
                            <h1>Coffee and tea</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='ac'
                            onChange={(e) => handleFacilitiesChange('ac', e.target.checked)}
                            />
                            <h1>AC</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='swiming_pool'
                            onChange={(e) => handleFacilitiesChange('swiming_pool', e.target.checked)}
                            />
                            <h1>Swiming Pool</h1>
                        </div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='gym'
                            onChange={(e) => handleFacilitiesChange('gym', e.target.checked)}
                            />
                            <h1>Gym</h1>
                        </div>
                        <div className="flex flex-wrap  mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='play_area'
                            onChange={(e) => handleFacilitiesChange('play_area', e.target.checked)}
                            />
                            <h1>Play Area</h1>
                        </div>
                        <div className="flex flex-wrap mb-4 sm:mb-6"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='parking'
                            onChange={(e) => handleFacilitiesChange('parking', e.target.checked)}
                            />
                            <h1>Parking</h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />
                       
                     <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Hotel Services</div>
                        <div className="flex flex-wrap mb-1 sm:mb-2"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='havana_lobby_bar'
                            onChange={(e) => handleServicesChange('havana_lobby_bar', e.target.checked)}
                            />
                            <h1>Havana Lobby bar</h1>
                        </div> 

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='fiesta_restaurant'
                            onChange={(e) => handleServicesChange('fiesta_restaurant', e.target.checked)}
                            />
                            <h1>Fiesta Restaurant</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='hotel_transport'
                            onChange={(e) => handleServicesChange('hotel_transport', e.target.checked)}
                            />
                            <h1>Hotel transport</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='free_luggage'
                            onChange={(e) => handleServicesChange('free_luggage', e.target.checked)}
                            />
                            <h1>Free luggage</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='laundry_services'
                            onChange={(e) => handleServicesChange('laundry_services', e.target.checked)}
                            />
                            <h1>Laundry Services</h1>
                        </div>

                        <div className="flex flex-wrap mb-1 sm:mb-2" >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                            value='pets_welcome'
                            onChange={(e) => handleServicesChange('pets_welcome', e.target.checked)}
                            />
                            <h1>Pets welcome</h1>
                        </div>

                        <div className="flex flex-wrap mb-4 sm:mb-6"  >
                            <input type="checkbox" className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3" 
                            value='tickets'
                            onChange={(e) => handleServicesChange('tickets', e.target.checked)}
                            />
                            <h1>Tickets</h1>
                        </div>
                        <hr className=" border-t-2 border-gray-300 " />
                    </div>
                </div>
                  
             

                <div className="col-span-12 md:col-span-9 ">
                    <div className="flex flex-wrap sm:pr-2 sm:pl-2">
                        <div className="text-left font-bold text-2xl w-full md:w-1/2">{Hotels.length} hotels found</div>
                            <div className="w-full md:w-1/2  text-end">Sort by: 
                                <select onChange={handleSorting} className="bg-white border-2 border-gray-300 px-2 sm:px-3 py-1 sm:py-2">
                                    <option value="">--Recommended--</option>
                                    <option value="price">Price</option>
                                    <option value="hotel_star">Hotel Star</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {
                                Hotels.map((val,key)=>{
                                    return(
                                        <a href={`hotels/${val._id}`} className=" border-b-2 border-b-gray-300 my-2 sm:my-3 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300   border-t-2 border-t-gray-300 flex flex-wrap ">
                               
                                            <img src={`${API_BASE_URL}/hotel/${val.hotel_photo}`} className="w-full md:w-1/4 h-60" />
                                            <div className="w-1/2 sm:w-2/4 pl-2 pb-3 sm:pl-3 pt-3 sm:pt-5 border-r-2 border-r-gray-300 "> 
                                                <div className="w-full">
                                                <h1  className=" text-2xl"> {renderRatingStars(val.hotel_rating_standard)}  </h1>
                                                <div className="font-bold text-3xl text-gray-700"> {val.hotel_name}</div>
                                                <div>
                                                    <i class="fa fa-diamond mt-5 sm:mt-2"></i><span className=" font-bold">Facilities:</span>
                                                   
                                                    {val.facilities.map((key, index) => (
                                                    <span className="m-1">
                                                        { key == 'car_hire' ? 'Car Hire,' : ''}
                                                        { key == 'wake_up_call' ? 'Wake Up Call,' : ''}
                                                        { key == 'flat_tv' ? 'Flat TV,' : ''}
                                                        { key == 'ac' ? 'AC,' : ''}
                                                        { key == 'coffee_and_tea' ? 'Coffee & Tea,' : ''}
                                                        { key == 'bicycle_hire' ? 'Bicycle Hire,' : ''}
                                                        { key == 'laundry_and_dry_cleaning' ? 'Laundry & Dry Cleaning,' : ''}
                                                        { key == 'internet_Wifi' ? 'Wifi,' : ''}
                                                        { key == 'swiming_pool' ? 'Swiming Pool,' : ''}
                                                        { key == 'gym' ? 'Gym,' : ''}
                                                        { key == 'play_area' ? 'Play Area,' : ''}
                                                        { key == 'parking' ? ' Parking,' : ''}
                                                        
                                                    </span>
                                                    ))}
                                                 
                                                
                                                 </div>


                                                 <div>
                                                    <i class="fa fa-diamond mt-5 sm:mt-2"></i><span className=" font-bold ">Services:</span>
                                                    
                                                    {val.hotel_service.map((key, index) => (
                                                    <span className="m-1">
                                                        { key == 'hotel_transport' ? 'Hotel Transport,' : ''}
                                                        { key == 'free_luggage' ? 'Free Luggage,' : ''}
                                                        { key == 'tickets' ? 'Tickets,' : ''}
                                                        { key == 'laundry_services' ? 'Laundry Services,' : ''}
                                                        { key == 'fiesta_restaurant' ? 'Fiesta Restaurant,' : ''}
                                                        { key == 'pets_welcome' ? 'Pets Welcome,' : ''}
                                                        { key == 'havana_lobby_bar' ? 'Havana Lobby Bar,' : ''}
                                                        
                                                        </span>
                                                    ))}
                                                 </div>
                                               
                                                 </div> 
                                            </div>
                                            
                                            <div className="w-1/2 sm:w-1/4 p-2">
                                                <div className=" flex flex-wrap">


                                                <div className="pl-1 sm:pl-2  pt-2 sm:pt-3 w-full">
                                                    <div className="">
                                                        <i class="fa fa-diamond mt-2 sm:mt-3"></i><span className="font-bold">Hotel Star:</span>
                                                        <div><span className=" pl-2 sm:pl-3 font-bold text-orange-600">{val.hotel_star} Star Hotel</span></div>
                                                    </div>
                                                </div>
                                                <div className="pl-1 sm:pl-2 w-full">
                                                    <span>
                                                    <i class="fa fa-diamond mt-2 sm:mt-3"></i><span className=" font-bold">Type:</span>
                                                    <div>
                                                    {val.property_type.map((key, index) => (

                                                        <span  className=" text-orange-600 font-bold">
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
                                                        </span>
                                                    ))}
                                                     </div>                                               
                                                </span>
                                                    </div>
                                                    <div className="md:pt-16 pl-0 md:pl-5 sm:pl-2">
                                                        from <span className="font-bold">₹ {val.price}</span> /night
                                                    </div>
                                                
                                                </div>
                                                
                                                
                                                

                                            </div>
                                        
                                        </a>            
                                    )
                                })
                            }
                           
                            

                           
                        </div>

                        <div className="flex flex-wrap">
                            <div className="w-1/2 text-right">
                                <i className="fa fa-chevron-left pr-8 sm:pr-12 mt-2 sm:mt-3"></i>
                                <button href="javascript:void(0)"  className="px-4 sm:px-6 py-1 sm:py-2 mx-1 sm:mx-2 rounded border-2 border-gray-500" onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
                             </div>
                             <div className="w-1/2 text-left">
                                <button href="javascript:void(0)" className="px-4 sm:px-6 py-1 sm:py-2 mx-1 sm:mx-2 rounded border-2 border-gray-500 " onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
                                <i className="fa fa-chevron-right pl-8 sm:pl-12 mt-2 sm:mt-3"></i>
                             </div>
                        </div>

                        <div className="text-center">Showing {currentPage} of {totalPages} Pages</div>

                </div>
            </div>
        </div>
  
      
        <Footer/>
        </>
    );
}
export default Hotels;