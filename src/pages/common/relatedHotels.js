import API_BASE_URL from '@/config';
import React from 'react';

const RelatedHotelList = ({ relatedHotel }) => {
  return (
    <>
     {Array.isArray(relatedHotel) && relatedHotel.map(hotel => (
        <>
        <a href={`/hotels/${hotel._id}`} className="flex-wrap ">
                               
            <div  className="flex flex-wrap pb-2">
                <div className=" w-1/3">
                    <img src={`${API_BASE_URL}/hotel/${hotel.hotel_photo}`} className=" w-24" />
                </div>

                <div className=" w-2/3 pl-2">
                    <h1 className=" text-orange-600"> {hotel.hotel_star} Start Hotel</h1>
                    <h1 className=" text-orange-600 ">{hotel.hotel_name}</h1>
                    <div>from {hotel.price}/night</div>
                </div>
            </div>
            <hr/>
            </a>
        </>
     ))}
    
    
    </>
    );
};

export default RelatedHotelList;