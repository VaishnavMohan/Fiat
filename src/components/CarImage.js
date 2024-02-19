import React from 'react';
import './CarImage.css'; 
import carImage from './car1.png'

const CarImage = () => {
  return (
    <div className="car-image-container">
      <img src={carImage} alt="Fiat 500 Hybrid" />
    </div>
  );
};
export default CarImage;
