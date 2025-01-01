import { useRouter } from 'next/router';

import Footer from "../common/footer";
import Header from "../common/header";
import RoomList from '../common/hotelRooms';
import axios from "axios";
import { useState, useEffect } from "react";
import FormToggle from '../FormToggle';
import Modal from '../common/enquery_model';
import API_BASE_URL from '@/config';
import RelatedPackageList from './relatedPackage';
import ExclusionTab from './ExclusionTab';
import ItineraryTab from "./ItineraryTab";
import FAQTab from "./FAQTab";
import InclusionTab from "./InclusionTab";
import ItenerySlider from '../common/ItenerySlider';


function PackageDetaile() {
    const router = useRouter();
    const [packageData, setPackageData] = useState([]);
    const [relatedPackage, setRelatedPackage] = useState([]);
    const [iteneries, setItenery] = useState([]);
    const [inclusions, setInclusions] = useState([]);
    const [exclusions, setExclusions] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [packageGallery, setPackageGallery] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
   
    const [activeTab, setActiveTab] = useState('itinerary'); // Default to itinerary tab
    const [isClient, setIsClient] = useState(false);

  

  // Use useEffect to ensure this runs on the client side only
    useEffect(() => {
        setIsClient(true);
    }, []);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    

    var token = '';
    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
    } else {
        token = '';
    }
    //console.log(`package data id query:${router.query}`);
    useEffect(() => {
        var { packageid } = router.query;
        //alert(package_id)
        console.log(`package data id: ${packageid}`);
        if (packageid) {
            const fetchPackage = async () => {

                if (packageid != undefined) {
                    const response = await fetch(`${API_BASE_URL}/package/package-list/${packageid}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        },
                    });
    
                    if (!response.ok) {
                        throw new Error('Failed to fetch package data');
                    } else {
                        const data = await response.json();
                        setPackageData(data.result); // Set hotel data
                        
    
                        if (data.result.intenery) {
                            const inteneryData = JSON.parse(data.result.intenery);
                            const iteneryGallery = inteneryData.filter(item => item.image).map(item => item.image);
                            setPackageGallery(iteneryGallery);
                            setItenery(inteneryData);
                        }
    
                        if (data.result.include) {
                            var inclusionData = await JSON.parse(data.result.include);
                            setInclusions(inclusionData||[]);
                        }
                        if (data.result.exclude) {
                            var excludeData =await JSON.parse(data.result.exclude);
                            setExclusions(excludeData||[]);
                        }
                        if (data.result.faq) {
                            var faqData =await JSON.parse(data.result.faq);
                            setFaqs(faqData ||[]);
                        }
                        setRelatedPackage(data.relatedPackages || []); // Set rooms data
    
                        //console.log(`rooms ${data.rooms}`);
                    }
    
    
                }
    
            }
    
            fetchPackage();
        }
    }, [router.query]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'itinerary':
                return <ItineraryTab iteneries={iteneries} />;
            case 'inclusion':
                return <InclusionTab inclusions={inclusions}/>;
            case 'exclusion':
                return <ExclusionTab exclusions={exclusions}/>;
            case 'faq':
                return <FAQTab faqs={faqs}/>;
            default:
                return null;
        }
    };


    if (!isClient) {
        return <div>Loading...</div>;
    }

    const renderSlider = packageGallery && packageGallery.length > 0;
    //console.log('package gallery'+packageGallery);
    return (
        <>

            <Header />
            
            <div className="container sm:mx-auto mt-12 sm:mt-16 minheight sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center p-2">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 sm:col-span-9">
                            <div className="flex flex-wrap mb-1 sm:mb-2 ">

                                <div className="w-full sm:w-2/3 ">
                                    <h1 className=" text-orange-600 text-lg"></h1>
                                    <h1 className="  text-3xl font-bold text-gray-600">{packageData.title}</h1>
                                    <div className=" text-lg"><i className="fa fa-map-marker "></i> {packageData.real_address} </div>
                                </div>

                                <div className="w-full  sm:w-1/3">
                                    <div className=''>
                                        <span className=" text-lg font-bold  text-gray-600">Package Type:</span>
                                        <span className="  pl-1 sm:pl-2 font-bold text-orange-600">{packageData.package_type}</span>
                                    </div>

                                    <div className=" "> from <span className="font-bold">₹ {packageData.price}</span> /night</div>
                                </div>
                            </div>

                            <div className="mb-4 md:mb-0 h-96">
                                <div>
                                    {packageGallery.length > 1 ? (
                                        renderSlider && <ItenerySlider images={packageGallery} page={'package'} />
                                    ) : (
                                        <div className="content">
                                            <div className=" mx-auto">
                                                <div>
                                                    <div className="img-body">
                                                        <img src={`${packageGallery[0]}`} alt={`Slide ${packageGallery[0]}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                </div>

                            </div>
                        </div>

                        {/* Right column: Package details */}
                        
                        <div className="col-span-12 sm:col-span-3  pl-5 my-10">
                            <div className="font-bold"><span className=" text-orange-600 "> | </span> RELATED Packages </div>
                            <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />

                            <RelatedPackageList relatedPackage={relatedPackage} />
                            {/* reletdd packages*/}
                            <hr className="border-t-2 border-gray-500 my-4 sm:my-6" />
                            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                                Book Now
                            </button>
                            <Modal isOpen={isOpen} onClose={closeModal}>
                            </Modal>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="container mx-auto my-1 sm:my-2 sm:px-6 lg:px-8">
                <div className="flex flex-wrap ">
                    <div className="grid grid-cols-12 p-3 gap-8">
                        <div className="col-span-12 sm:col-span-9">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12">
                                <div className="bg-orange-600 rounded-md">
                                    <div className="flex space-x-4">
                                        <button className={`tab-button border-r p-3  border-white text-white ${activeTab === 'itinerary' ? 'active' : ''}`} onClick={() => setActiveTab('itinerary')}>Itinerary</button>
                                        <button className={`tab-button border-r p-3  text-white ${activeTab === 'inclusion' ? 'active' : ''}`} onClick={() => setActiveTab('inclusion')}>Inclusion</button>
                                        <button className={`tab-button border-r p-3  text-white  ${activeTab === 'exclusion' ? 'active' : ''}`} onClick={() => setActiveTab('exclusion')}>Exclusion</button>
                                        <button className={`tab-button border-r p-3  text-white ${activeTab === 'faq' ? 'active' : ''}`} onClick={() => setActiveTab('faq')}>FAQ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content mt-4 ">
                            {renderTabContent()}
                        </div>
                        </div>
                        <div className="col-span-12 sm:col-span-12">
                            <h1 className="font-bold text-3xl mt-6 sm:mt-9">Description</h1>
                            <p className=" text-sm my-6">
                                <div dangerouslySetInnerHTML={{__html: packageData.content}}/>
                            </p>
                            <h1 className="font-bold text-xl my-5">HIGHLIGHTS</h1>
                            <p className=" text-sm my-6">
                                <div dangerouslySetInnerHTML={{__html: packageData.highlight}}/>
                            </p>
                           
                            <div className="font-bold flex flex-wrap">
                                <h3 className="font-bold">Guarantee Policy:</h3>
                                <div className="text-sm">
                                    <div dangerouslySetInnerHTML={{ __html: packageData.guarantee_policy }} />
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className=""></div>
                                <div className="text-sm">
                                    <span className="font-bold text-lg text-gray-800">Cancellation/Amendment Policy</span><br></br>
                                
                                 <p><div dangerouslySetInnerHTML={{ __html: packageData.cancellation_policy }} ></div></p>
                                </div>
                            </div>
                            <hr className="border-t-1 border-gray-500 my-8 sm:my-12" />
                            <div className=" flex flex-wrap my-2 sm:my-3">
                                <h1 className="font-bold text-3xl  w-1/2 text-left">Location</h1>
                                <h1 className="w-1/2 text-right"> <i className="fa fa-location-arrow  "></i>{packageData.real_address} </h1>

                            </div>
                            <div>
                                <div dangerouslySetInnerHTML={{ __html: packageData.map_zoom }} />
                            </div>
                            <hr className="border-t-1 border-gray-500 my-4 sm:my-6" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default PackageDetaile;