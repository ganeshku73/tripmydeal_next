import Head from 'next/head';
import Header from "./common/header";
import Image from "next/image";
import Footer from './common/footer';
import BannerSlider from './common/bannerslider';

function Homepage(){
    return(
        <>
            <Header/>
            
            <BannerSlider />
            
            
       <section>
        <div className='container mx-auto'>
        <div className='my-10 flex flex-wrap  justify-center font-bold text-4xl'>
                Our Packages
            </div>

         <div className="flex flex-wrap justify-center">

               
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-1.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-2.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-3.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-4.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-5.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>

    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src="/destination-6.jpg" alt="fd" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">destination</div>
        <p className="text-gray-700 text-base">
          Starting from 100 per person
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #vacation
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          sdss
        </span>
      </div>
    </div>
 
    </div>
        </div>
        
        </section> 



            <Footer/>
     
        </>
    );
}
export default Homepage;