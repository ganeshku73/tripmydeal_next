// components/FotoramaSlider.js

import React, { useEffect, useRef } from 'react';
import 'fotorama/fotorama.css'; // Import Fotorama CSS
import $ from 'jquery'; // Import jQuery


const FotoramaSlider = ({ images }) => {
  const fotoramaRef = useRef(null);

  useEffect(() => {
    // Ensure jQuery is initialized globally
    window.$ = $;

    // Initialize Fotorama plugin on component mount
    if (fotoramaRef.current) {
      $(fotoramaRef.current)
    }
  }, []);

  return (
    <div ref={fotoramaRef} className="fotorama">
      {Array.isArray(images) && images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index + 1}`} />
      ))}
    </div>
  );
};

export default FotoramaSlider;
