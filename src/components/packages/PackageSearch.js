import { useState } from "react";
const PackageSearch = () =>{
    
    const [input, setInput] = useState({
        destination:''
    });

    const handleInput = (event)=>{
        const {name,value} = event.target;
        setInput((prevData)=>({
            ...prevData,
             [name]:value
        }))
    }
    
    return(
        <>
            <div className="w-full flex justify-center items-center from-indigo-500 to-blue-500" style={{marginTop: "-48px"}}>
                <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg" style={{zIndex:"9"}}>
                    <form action={'packages'}>
                    <div className="flex space-x-4">
                        <div className="w-2/3">
                        <input 
                            type="text" 
                            placeholder="Enter your destination" 
                            className="w-full p-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onChange={handleInput} name="destination" value={input.destination}
                        />
                        </div>
                    
                        <div className="w-1/3">
                        <button 
                            type="submit" 
                            className="w-full p-4 text-lg font-semibold text-white bg-blue-400 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Search
                        </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>


        </>
    )

}
export default PackageSearch;