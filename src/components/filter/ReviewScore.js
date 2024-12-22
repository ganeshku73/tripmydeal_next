import { useState } from 'react';

const StarPattern = ({ onChange }) => {
    const [selectedStars, setSelectedStars] = useState([]);

    const handleRatingChange = (event) => {
        const star = parseInt(event.target.value, 10);
        const newSelectedStars = selectedStars.includes(star)
            ? selectedStars.filter((s) => s !== star)
            : [...selectedStars, star];
        
        setSelectedStars(newSelectedStars);
        onChange(newSelectedStars); // Pass the updated state to parent
    }

    return (
        <div>
            {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="text-orange-600">
                    <input
                        type="checkbox"
                        className="py-1 sm:py-2 ml-4 sm:ml-6 mr-2 sm:mr-3"
                        value={5 - i}
                        checked={selectedStars.includes(5 - i)}
                        onChange={handleRatingChange}
                    />
                    {Array.from({ length: 5 - i }, (_, j) => (
                        <i key={j} className="fa fa-star pl-1"></i>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default StarPattern;
