import { useState,useEffect } from "react";
import Head from 'next/head';
import Header from "./common/header";
import MobileHeader from "./common/mobile_header";

import Image from "next/image";
import Footer from './common/footer';
import BannerSlider from './common/bannerslider';
import API_BASE_URL from "@/config";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';

function Home(){
  const [isClient, setIsClient] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [apiUrl, setApiUrl] = useState(`${API_BASE_URL}/package/package-list`);
  const [Packages, setPackageData] = useState([]); 
 

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
 
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
      
      let url = `${API_BASE_URL}/package/package-list`;
      let queryParams = [];
      queryParams.push(`page=${currentPage}`);
      queryParams.push(`limit=6`);
      setApiUrl(url); // Update apiUrl state
    }, [filters,currentPage]);

    var token = '';
    if (typeof localStorage !== "undefined") {
        token = localStorage.getItem('username');
      } else {
        token = '';
      }

    const fetchPackagesData = async ()=>{
      {
         await axios.get(`${apiUrl}`,{
              headers: {
                Authorization: `Bearer ${token}`
              }
            }).then((response)=>{
              if(response != ''){
                if(response.data.status!=0){
                  setPackageData(response.data.result);
                }else{
                  setPackageData(response.data.result);
                }
              }else{
                  setPackageData([]);
              }
            }).catch(error => {
              // Handle errors
              console.log('Error fetching hotel data:', error);
              setPackageData([]); // Set hotel data to an empty array on error
              
          });
        }
    }

    useEffect(() => {
      fetchPackagesData();
    },[])
    if (!isClient) {
      // Return null or a placeholder to prevent SSR mismatch
      return null;
    }
    //console.log(Packages);
    return(
        <>
            
            <div>
              {isDesktop && <Header/>}
              {isDesktop && <BannerSlider />}
              {isMobile && <MobileHeader/>}
            </div>
            
       <section>
        <div className='container mx-auto'>
        <div className='my-10 flex flex-wrap  justify-center font-bold text-4xl'>
                Our Packages
            </div>

         <div className="flex flex-wrap justify-center">

       {Packages.length>0 && Packages.map((item,index) =>{
         return(
          <a href={`packages/${item._id}`} className="">
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
              <img className="w-full" src={`${API_BASE_URL}/package/${item.feature_image}`} alt="fd" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
               
              </div>
             
            </div>
          </a>
         )

       })}        
    </div>
        </div>
        
        </section> 



            <Footer/>
     
        </>
    );
}
export default Home;