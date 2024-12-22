import Footer from "./common/footer";
import Header from "./common/header";
import BannerSlider from "./common/bannerslider";
import axios from "axios";
import { useState, useEffect } from "react";
import API_BASE_URL from "@/config";
import PriceRangeSlider from "@/components/filter/PriceRangeSlider";
import StarPattern from "@/components/filter/ReviewScore";


function Package() {
    const [filters, setFilters] = useState({
        maxPrice: 0,
        minPrice: 0,
        starRating: []
      });

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    //const [selectedStars, setSelectedStars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [resultCount, setResultCount] = useState(0);
    const [Packages, setPackageData] = useState([]);
    const [sorting, setSorting] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [apiUrl, setApiUrl] = useState(`${API_BASE_URL}/package/package-list`);
   

    // Function to update filters
    const handlePrev = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    const handleNext = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleRatingChanges = (selectedStars) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            starRating: selectedStars
        }));
    }

    // Function to handle price range updates
    const handleRangeChange = (min, max) => {
        setFilters(prevFilters => ({
        ...prevFilters,
        minPrice: min,
        maxPrice: max
        }));
    };

    useEffect(() => {
        let url = `${API_BASE_URL}/package/package-list`;
        let queryParams = [];
        queryParams.push(`page=${currentPage}`);
       
        queryParams.push(`minPrice=${filters.minPrice}`);
       
        queryParams.push(`starRating=${filters.starRating.join(',')}`); 
        
        if (sorting) {
            queryParams.push(`sort_by=${sorting}`);
        }
        if (queryParams.length > 0) {
            url += "?" + queryParams.join("&");
        }
        setApiUrl(url); // Update apiUrl state
    }, [sorting, filters, currentPage]);

    const handleSorting = async (event) => {
        setSorting(event.target.value);
    }
    useEffect(() => {
        // Call fetchPackagesData whenever apiUrl changes
        if (apiUrl) {
            fetchPackagesData();
        }
    }, [apiUrl]);

    




    var token = '';
    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
    } else {
        token = '';
    }


    const fetchPackagesData = async () => {
        {
            await axios.get(`${apiUrl}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if (response != '') {
                    if (response.data.status != 0) {
                        let minPriceFind = Math.min(...response.data.result.map(p => p.price));
                        let maxPriceFind = Math.max(...response.data.result.map(p => p.price));
                        
                        setMinPrice(parseInt(minPriceFind));
                        setMaxPrice(parseInt(maxPriceFind));
                        
                        setPackageData(response.data.result);
                        setResultCount(response.data.resultCount);
                        setTotalPages(response.data.totalPages);
                    } else {
                        setPackageData(response.data.result);
                        setResultCount(response.data.resultCount);
                        setTotalPages(response.data.totalPages);
                    }
                } else {
                    setPackageData([]);
                }
            }).catch(error => {
                // Handle errors
                console.log('Error fetching hotel data:', error);
                setPackageData([]); // Set hotel data to an empty array on error
                setResultCount(0);
            });
        }
    }
    useEffect(() => {
        fetchPackagesData();
    }, [])
    
    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    };

    return (

        <>
            <Header />
            <BannerSlider />


            {popupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full p-4 rounded-md shadow-md">
                        <div className="col-span-12 sm:col-span-12 block md:hidden ">
                            <div className="border-2 border-gray-300 overflow-y-auto max-h-96">
                                Filter Option under working
                            </div>
                        </div>

                        <button className="bg-orange-600 text-white px-4 py-2 rounded-md mt-2" onClick={togglePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}






            <div className="container mx-auto">

                <div className="grid grid-cols-12  gap-8 mt-6 sm:mt-9">

                    <div className="col-span-12 sm:col-span-3 hidden md:block">
                        <div className="border-2 border-gray-300 ">
                            <div className="py-4">
                                <span className="text-xl font-bold px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3">FILTER BY</span>
                            </div>
                            <hr className="border-t-2 border-gray-300 " />
                            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Review Score</div>
                            <div className="flex flex-wrap mb-1 sm:mb-2">
                                <StarPattern onChange={handleRatingChanges}/>
                            </div>

                            <hr className=" border-t-2 border-gray-300 " />
                            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 sm:pb-3 font-semibold">Price Range</div>
                            <div className="flex flex-wrap mb-1 sm:mb-2 pl-4">
                                <PriceRangeSlider
                                min={minPrice}
                                max={maxPrice}
                                onChange={handleRangeChange}/>
                            </div>
                        </div>
                    </div>



                    <div className="col-span-12 md:col-span-9 ">
                        <div className="flex flex-wrap sm:pr-2 sm:pl-2">
                            <div className="text-left font-bold text-2xl w-full md:w-1/2">{Packages.length} Packages found</div>
                            <div className="w-full md:w-1/2  text-end">Sort by:
                                <select onChange={handleSorting} className="bg-white border-2 border-gray-300 px-2 sm:px-3 py-1 sm:py-2">
                                    <option value="">--Recommended--</option>
                                    <option value="price">Price</option>
                                    <option value="rating">Rating</option>
                                </select>

                            </div>
                        </div>
                        <div>
                            {
                                Packages.map((val, key) => {
                                    return (
                                        <a href={`packages/${val._id}`} className=" border-b-2 border-b-gray-300 my-2 sm:my-3 border-r-2 border-r-gray-300 border-l-2 border-l-gray-300   border-t-2 border-t-gray-300 flex flex-wrap ">

                                            <img src={`${API_BASE_URL}/package/${val.feature_image}`} className="w-full md:w-1/4 h-60" />
                                            <div className="w-1/2 sm:w-2/4 pl-2 pb-3 sm:pl-3 pt-3 sm:pt-5 border-r-2 border-r-gray-300 ">
                                                <h1 className=" text-2xl"> {val.package_type}  </h1>
                                                <div className="font-bold text-1xl text-gray-700"> {val.title}</div>
                                                <div className="font-bold text-1xl text-gray-700"> Address: {val.real_address}</div>
                                                <div className="font-bold text-1xl text-gray-700"> Review Score: {val.rating}</div>
                                            </div>

                                            <div className="w-1/2 sm:w-1/4 p-2">
                                                <div className=" flex flex-wrap">


                                                    <div className="pl-1 sm:pl-2  pt-2 sm:pt-3 w-full">
                                                        <div>
                                                            <div><i class="fa fa-diamond mt-2 sm:mt-3"></i><span className=" font-bold">Duration:</span></div>
                                                            <div><span className=" pl-2 sm:pl-3 font-bold text-orange-600">{val.duration}</span></div>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                    <div className=" pl-1 sm:pl-2">

                                                        <div><i class="fa fa-money sm:mt-3"></i><span className=" font-bold pl-2">Price:</span></div>
                                                        <div><span className="font-bold">₹ {val.price}</span> /night</div>
                                                        <hr />

                                                    </div>
                                                    <div className=" sm:pl-2">
                                                        <span>
                                                            <div><i class="fa fa-money mt-2 sm:mt-3"></i><span className=" font-bold pl-2">Offer Price: </span></div>
                                                            <div><span className="font-bold">₹ {val.offer_price}</span> /night</div>
                                                        </span>
                                                        <hr />
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
                                <button href="javascript:void(0)" className="px-4 sm:px-6 py-1 sm:py-2 mx-1 sm:mx-2 rounded border-2 border-gray-500" onClick={handlePrev} disabled={currentPage === 1}>Previous</button>
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


            <Footer />
        </>
    );
}
export default Package;