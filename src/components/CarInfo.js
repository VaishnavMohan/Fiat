import React from 'react';
import './CarInfo.css'; 

const CarInfo = () => {
  return (
   <div className="car-info">
      <h1 className="car-title">500 HYBRID</h1>
      <p className="car-subtitle">Une voiture hybride et iconique</p>
      <p className="car-price">2,380,000 DA TTC*</p>
      <button className="select-button">SÉLECTIONNER</button>
    </div>
  );
}

export default CarInfo;
