import { useState, useEffect } from 'react';

const PriceRangeSlider = ({ min, max, onChange }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    setMinValue(min);
    setMaxValue(max);
  }, [min, max]);

  const handleMinChange = (event) => {
    const newMin = Number(event.target.value);
    setMinValue(newMin);
    if (typeof onChange === 'function') {
      onChange([newMin, maxValue]);
    } else {
      console.error('onChange prop is not a function');
    }
  };

  const handleMaxChange = (event) => {
    const newMax = Number(event.target.value);
    setMaxValue(newMax);
    if (typeof onChange === 'function') {
      onChange([minValue, newMax]);
    } else {
      console.error('onChange prop is not a function');
    }
  };

  return (
    <div>
      <label>
        Price Range: <i className='fa fa-rupee'></i> {minValue} - <i className='fa fa-rupee'></i> {maxValue}
      </label>
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={minValue}
          onChange={handleMinChange}
          style={{ width: '45%' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step="1"
          value={maxValue}
          onChange={handleMaxChange}
          style={{ width: '45%' }}
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
