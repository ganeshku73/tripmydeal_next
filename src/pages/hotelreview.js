import React from 'react';

function Hotelreview(){
    return(
        <>

<h1 className="font-bold text-3xl my-6 sm:my-9">Reviews</h1>
<div className="flex flex-wrap  border-2 border-gray-400 py-6 sm:py-9">
    <div className="w-2/8 px-10 sm:px-16">
        <div className=" text-6xl text-orange-600 mb-1 sm:mb-2"> 4.8<span className="text-orange-600 text-2xl">/5</span></div>
        <div className=" text-3xl  mb-1 sm:mb-2"> Excellent</div>
        <div>Based on <span className=" text-orange-600"> 4 reviews</span></div>
        <div className="border-r-2 border-r-gray-400"></div>
    </div>

    <div className=" border-r-2 border-r-gray-400"></div>

    <div className="w-6/8 px-16 sm:px-24 ">
        
        <div className="mb-1 sm:mb-2">Excellent
        <input
            type="range"
            min="0"
            max="1000"
            step="100"
            className=" w-80 ml-4 sm:ml-6"
            />
            <span className="pl-2 sm:pl-3"> 3</span>
        </div>
        <div className="mb-1 sm:mb-2">Very Good
        <input
            type="range"
            min="0"
            max="1000"
            step="100"
            className=" w-80 ml-2 sm:ml-3"
            />
              <span className="pl-2 sm:pl-3"> 1</span>
        </div>
        <div className="mb-1 sm:mb-2">Average
        <input
            type="range"
            min="0"
            max="1000"
            step="100"
             className=" w-80 ml-5 sm:ml-8"
            />
              <span className="pl-2 sm:pl-3"> 0</span>
        </div>
        <div className="mb-1 sm:mb-2">Poor
        <input
            type="range"
            min="0"
            max="1000"
            step="100"
            className=" w-80 ml-9 sm:ml-14"
            />
              <span className="pl-2 sm:pl-3"> 0</span>
        </div>
        <div className="mb-1 sm:mb-2">Terrible
        <input
            type="range"
            min="0"
            max="1000"
            step="100"
            className=" w-80 ml-6 sm:ml-9"
            />
              <span className="pl-2 sm:pl-3"> 0</span>
        </div>
    </div>
</div>

<hr className="border-t-1 border-gray-500 my-8 sm:my-12" />

<div>
    <div className="flex flex-wrap">
        <i class="fa fa-user-circle text-3xl"></i>
        <span className="pl-2 sm:pl-3"> 04/06/2024    18:20</span>
    </div>

    <div className="font-bold">Beautiful spot with a lovely view</div>
    {/* <div className="text-orange-600 my-1 sm:my-2">{review}</div> */}
    <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
</div>

<hr className="border-t-1 border-gray-500 my-6 sm:my-9" />


<div>
    <div className="flex flex-wrap">
        <i class="fa fa-user-circle text-3xl"></i>
        <span className="pl-2 sm:pl-3"> 25/05/2024    10:30</span>
    </div>

    <div className="font-bold">Easy way to discover the city </div>
    {/* <div className="text-orange-600 my-1 sm:my-2">{review}</div> */}
    <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
</div>

<hr className="border-t-1 border-gray-500 my-6 sm:my-9" />


<div>
    <div className="flex flex-wrap">
        <i class="fa fa-user-circle text-3xl"></i>
        <span className="pl-2 sm:pl-3"> 10/05/2024    08:20</span>
    </div>

    <div className="font-bold">Beautiful spot with a lovely view</div>
    {/* <div className="text-orange-600 my-1 sm:my-2">{review}</div> */}
    <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
</div>

<hr className="border-t-1 border-gray-500 my-6 sm:my-9" />



<div>
    <div className="flex flex-wrap">
        <i class="fa fa-user-circle text-3xl"></i>
        <span className="pl-2 sm:pl-3"> 24/04/2024    15:20</span>
    </div>

    <div className="font-bold">Beautiful spot with a lovely view</div>
    {/* <div className="text-orange-600 my-1 sm:my-2">{review}</div> */}
    <div>Eum eu sumo albucius perfecto, commodo torquatos consequuntur pro ut, id posse splendide ius. Cu nisl putent omittantur usu, mutat atomorum ex pro, ius nibh nonumy id. Nam at eius dissentias disputando, molestie mnesarchum complectitur per te</div>
</div>

<hr className="border-t-1 border-gray-500 my-4 sm:my-6" />

<div className=" text-right">Showing 1 - 4 of 4 total</div>
<div className=" text-left">Write a review</div>

<div className="border-2 border-gray-400  rounded p-6 sm:p-9">
    <input type="text" placeholder="Title" name="title" className="border-2 rounded border-gray-200 w-full py-1 sm:py-1mb-6 sm:mb-9 pl-2 sm:pl-3"/>
    <div className="flex flex-wrap ">
        <div className="w-8/12 pr-2">
            <textarea  type="text" placeholder="Review Content" className=" h-96 w-full rounded border-2 border-gray-200 pl-2 sm:pl-3 "/>
        </div>
        <div className="w-4/12  border-2 bg-white rounded pl-4 sm:pl-6 pt-4  sm:pt-6 border-gray-200">
            <h1 className="pb-1 sm:pb-1">Service</h1>
            {/* <h1 className="pb-1 sm:pb-1"> {star}</h1> */}
            <h1 className="pb-1 sm:pb-1">Organization</h1>
            {/* <h1 className="pb-1 sm:pb-1"> {star}</h1> */}
            <h1 className="pb-1 sm:pb-1">Friendliness</h1>
            {/* <h1 className="pb-1 sm:pb-1"> {star}</h1> */}
            <h1 className="pb-1 sm:pb-1">Area Expert</h1>
            {/* <h1 className="pb-1 sm:pb-1"> {star}</h1> */}
            <h1 className="pb-1 sm:pb-1">Safety</h1>
            {/* <h1 className="pb-1 sm:pb-1"> {star}</h1> */}
        </div>
        <button className="bg-orange-600 text-white mt-1 sm:mt-2 p-1 sm:p-1 px-2 sm:px-3 rounded ml-72 sm:ml-96"> Leave a Review</button>

    </div>

</div>

</>
    )
}
        
export default Hotelreview;