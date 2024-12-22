// components/Marquee.js
import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-black text-white h-10 py-1 sm:py-2 overflow-hidden">
      <div className="animate-marquee">
        <span className="marquee-item">
          Uttarakhand Package - (5N/6D) Adventure & Skiing Package
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
        <span className="marquee-item">
          Best Gujarat Family Tour - (5N/6D)
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
        <span className="marquee-item">
          Odisha & Deoghar Package
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
        <span className="marquee-item">
          Assam Tour Package - (5D/6N)
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
        <span className="marquee-item">
          Leh & Ladakh Package - (6D/7N)
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
        <span className="marquee-item">
          Shimla Manali Package - (6D/7N)
          <button className="bg-orange-600 mx-2 sm:mx-3 text-white px-2 rounded-md">Book Now</button>
        </span>
      </div>
    </div>
  );
};

export default Marquee;
