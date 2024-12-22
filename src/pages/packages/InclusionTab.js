const InclusionTab = (inclusionsParam) => {
    let inclusionsData = JSON.parse(JSON.stringify(inclusionsParam));

    if (!Array.isArray(inclusionsData.inclusions) || inclusionsData.inclusions.length === 0) {
        return <p>No Inclusions available</p>;
    }
    //console.log(inclusionsData.inclusions)
    return (
        <div>
            <h2>Inclusions List</h2>
            <ul>
            {inclusionsData.inclusions.map((item, index) => (
                <div key={index} className="space-y-2">
                    <li className="text-sm">{item.text}</li>
                </div>
            ))} 
            </ul>
        </div>
    );
}

export default InclusionTab;
