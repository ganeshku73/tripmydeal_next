// components/BannerSlider.js

import React, { Fragment } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const slides = [
    {
      id: 1,
      imageUrl: '/hotel-featured-1.jpg',
      altText: 'First slide',
    },
    {
      id: 2,
      imageUrl: '/hotel-featured-1.jpg',
      altText: 'Second slide',
    },
    // Add more slides as needed
  ];


const BannerSlider = () => {
    
  return (

    <Fragment>
      <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
          {slides.map(slide => (
            <SwiperSlide>
            <img
              src={slide.imageUrl}
              alt={slide.altText}
              className="w-full object-cover"
            />
            </SwiperSlide>
          ))}
    </Swiper>
   
    </Fragment>
  );
};

export default BannerSlider;


     