const ExclusionTab = (exclusionsParam) => {
    let exclusionData = JSON.parse(JSON.stringify(exclusionsParam));

     if (!Array.isArray(exclusionData.exclusions) || exclusionData.exclusions.length === 0) {
         return <p>No Exclusions available</p>;
     }
    //console.log(exclusionData)
    return (
        <div>
            <h2>Inclusions List</h2>
            <ul>
            {exclusionData.exclusions.map((item, index) => (
                <div key={index} className="space-y-2">
                    <li className="text-sm">{item.value}</li>
                </div>
            ))} 
            </ul>
        </div>
    );
}

export default ExclusionTab;
