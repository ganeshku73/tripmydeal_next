const ItineraryTab = (iteneries) => {
   
    let  iteneriesData = JSON.parse(JSON.stringify(iteneries));
    //console.log(iteneriesData.iteneries);
    if (!Array.isArray(iteneriesData.iteneries) || iteneriesData.iteneries.length === 0) {
        return <p>No itineraries available</p>;
    }
    return (
        <div>
            <h2>Package Iteneraries</h2>
            {iteneriesData.iteneries.map((item, index) => (
                <div key={index} className="space-y-2 mt-4 mb-4">
                    <h3 className="text-md font-medium bg-orange-600 p-2 text-white">{item.day} {item.city}</h3>
                    <p className="text-sm">{item.description}</p>
                    <img src={item.image} className="w-1/2"/>
                </div>
            ))}
        </div>
    );
}

export default ItineraryTab;
