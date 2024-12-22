import React, { useState,useRef  } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import API_BASE_URL from '@/config';

const ItenerySlider = ({ images,page }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settingsMain = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    asNavFor: nav2,
  };

 

  const settingsThumbnails = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  return (
    <div className="content">
        <div className=" mx-auto">
            
      <Slider {...settingsMain} ref={slider =>  { setNav1(slider); slider1.current = slider; }}>
        {Array.isArray(images) && images.map((image, index) => (
          <div key={index}>
             <div className="img-body ">
                <img src={image} alt={`Slide ${index}`}  />
            </div>
          </div>
        ))}
      </Slider>

      <div className="thumbnail-slider-wrap thumb-wrapper">
        <Slider {...settingsThumbnails} ref={slider => { setNav2(slider); slider2.current = slider; }}>
          {Array.isArray(images) && images.map((image, index) => (
            <div key={index} className="thumbnail-item">
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className={classNames('thumbnail-image', {
                  'thumbnail-active': nav2 && index === nav2.current?.slickCurrentSlide,
                })}
              />
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};

export default ItenerySlider;
