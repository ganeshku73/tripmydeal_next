import API_BASE_URL from '@/config';
import React from 'react';

const RoomList = ({ rooms }) => {
    

  return (

    <>
     {Array.isArray(rooms) && rooms.map(room => (
        <div className=" border-2 border-gray-400 mt-3 sm:mt-5  flex flex-wrap ">
            <img src={`${API_BASE_URL}/room/${room.room_photo}`} alt={`Room ${room.room_name.room_name}`} className="w-full sm:w-1/4" />
            <div className="w-full sm:w-3/4">
                <div className=" pl-8 sm:pl-12 pt-3 sm:pt-5 font-bold text-lg text-orange-600">{room.room_name.room_name}</div>
                <div className=" flex flex-wrap mt-2 sm:mt-3">
                    <span><i className="fa fa-area-chart  ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><span className="ml-7 sm:ml-9">{room.room_size} sqft</span></span> 
                    <span><i className="fa fa-hotel   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class=" pl-8 sm:pl-12"></i>{room.number_of_beds}</span> 
                    <span><i className="fa fa-users   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class=" pl-8 sm:pl-12"></i>{room.max_adults}</span> 
                    <span><i className="fa fa-child   ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class=" pl-8 sm:pl-12"></i>{room.max_children}</span> 
                    <span><i className="fa fa-line-chart  ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"></i><br></br><i class="pl-6 sm:pl-9"></i>{room.price}<i className="fa fa-inr pl-1 sm:pl-2"></i></span> 
                </div>
            

                <span className="flex flex-wrap my-2 sm:my-3">
               {
                room.room_amenities.map((val,index)=>(
                        <>
                        {(val == 'wake_up_call') ? (<span className=" ml-8 sm:ml-12 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-clock-o"></i> </span>) : ('')}
                        {(val == 'flat_tv') ? (<span className=" ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-television"></i> </span>) : ('')}
                        {(val == 'ac') ? (<span className=" ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-window-maximize"></i> </span>) : ('')}
                        {(val == 'coffee_and_tea') ? (<span className=" ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-coffee"></i> </span>) : ('')}
                        {(val == 'laundry_and_dry_cleaning') ? (<span className=" ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-recycle"></i> </span>) : ('')}
                        {(val == 'internet_Wifi') ? (<span className=" ml-6 sm:ml-9 border-2 border-gray-400 p-1 sm:p-2 rounded"> <i className="fa fa-wifi"></i> </span>) : ('')}
                         </>
                                
                    )
                        )
                }   
                     </span>
                   
              
            </div> 
        </div>
     ))}
    
    
    </>
    );
};

export default RoomList;