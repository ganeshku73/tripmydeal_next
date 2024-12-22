import API_BASE_URL from '@/config';
import React from 'react';

const RelatedPackageList = ({ relatedPackage }) => {
  return (
    <>
     {Array.isArray(relatedPackage) && relatedPackage.map(packagedata => (
        <>
        <a href={`/package/${packagedata._id}`} className="flex-wrap ">
                               
            <div  className="flex flex-wrap pb-2">
                <div className=" w-1/3">
                    <img src={`${API_BASE_URL}/package/${packagedata.feature_image}`} className=" w-24" />
                </div>

                <div className=" w-2/3 pl-2">
                    <h1 className=" text-orange-600"> {packagedata.title}</h1>
                    <h1 className=" text-orange-600 ">{packagedata.duration}</h1>
                    <div>INR {packagedata.price}</div>
                </div>
            </div>
            <hr/>
            </a>
        </>
     ))}
    
    
    </>
    );
};

export default RelatedPackageList;