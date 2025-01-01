import { useState, useEffect } from "react";
import Head from 'next/head';
import Header from "./common/header";
import MobileHeader from "./common/mobile_header";
import Footer from './common/footer';
import BannerSlider from './common/bannerslider';
import API_BASE_URL from "@/config";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import PackageSearch from "@/components/packages/PackageSearch";
function Home() {
  const [isClient, setIsClient] = useState(false); // To track client-side rendering
  const [currentPage, setCurrentPage] = useState(1);
  const [Packages, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track any error
  const [token, setToken] = useState(null); // Store token in state

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  // Set isClient flag to true when the component mounts (only on client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Attempt to retrieve the token when component mounts
    const storedToken = localStorage.getItem('username');
    setToken(storedToken); // Set token state
  }, []);

  // Fetch packages data when component is mounted or when currentPage changes
  useEffect(() => {
    if (!isClient || !token) return;// If no client-side or token is missing, don't make the API call
    setLoading(true); // Start loading before fetching data
    setError(null); // Reset error state
    const fetchPackagesData = async () => {
       try {
        const queryParams = new URLSearchParams({
          page: currentPage,
          limit: 6,
        });

        const res = await axios.get(`${API_BASE_URL}/package/package-list?${queryParams.toString()}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.status !== 0) {
          setPackageData(res.data.result);
        } else {
          setPackageData([]);
        }
      } catch (error) {
        console.error('Error fetching package data:', error);
        setError('Failed to fetch data.');
      } finally {
        setLoading(false); // End loading once the request is complete
      }
    };

    fetchPackagesData();
  }, [currentPage, isClient, token]); // Trigger effect when currentPage, isClient, or token changes

  // Prevent rendering before the component is mounted or while data is loading
  if (!isClient || loading) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  // If there's an error, show the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If no token found
  if (!token) {
    return <div>Please login to access packages.</div>; // Message if token is missing
  }

  return (
    <>
      <div>
        {isDesktop && <Header />}
        {isDesktop && <BannerSlider />}
        {isMobile && <MobileHeader />}
        <PackageSearch/>
      </div>

      <section>
        <div className="container mx-auto">
          <div className="my-10 flex flex-wrap justify-center font-bold text-4xl">
            Our Packages
          </div>

          <div className="flex flex-wrap justify-center">
            {Packages.length > 0 ? (
              Packages.map((item) => (
                <a href={`packages/${item._id}`} className="" key={item._id}>
                  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                    <img
                      className="w-full"
                      src={`${API_BASE_URL}/package/${item.feature_image}`}
                      alt={item.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>No packages available.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
