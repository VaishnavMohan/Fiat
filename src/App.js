import React from 'react';
import './App.css';
import Header from './components/Header';
import CarInfo from './components/CarInfo';
import CarImage from './components/CarImage';
import CarSelection from './components/CarSelection';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main-content">
      <section className="car-display">
  <CarInfo />
  <CarImage />
</section>
<section className="car-selection">
  <CarSelection />
</section>
       
      </main>
    </div>
  );
}

export default App;
