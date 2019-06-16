import React from 'react';
import Car1 from '../../Images/car1.jpg';

// const CarSummary = ({car}) => {
//   return (
//   <div className="car-summary">
//   <div className="card-image">
//     <img src={Car1} alt="" className="responsive-img" />
//   </div>
//   <div className="card-content">
//     <span className="card-title">{car.year} {car.make} {car.model}</span>
//     <p>{car.notes}</p>
//   </div>
//   </div>
//   )
// }

const CarSummary = () => {
  return (
    <div className='car-summary'>
      <div className='card horizontal'>
        <div className='card-image'>
          <img src={Car1} alt='' className='responsive-img' />
        </div>
        <div className='card-content'>
          <span className='card-title'>2005 Volkswagen Jetta</span>
          <p>4 wheel drive, 6 cylinder, yatta, yatta, yatta</p>
        </div>
      </div>
    </div>
  );
};

export default CarSummary;
