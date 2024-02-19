// CarSelection.js
import React from 'react';
import './CarSelection.css'; 

const CarSelection = () => {

  const thumbnails = ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'];

  return (
    <div className="car-selection">
      {thumbnails.map((thumb, index) => (
        <img key={index} src={thumb} alt={`Thumbnail ${index}`} className="car-thumbnail" />
      ))}
    </div>
  );
};

export default CarSelection;
