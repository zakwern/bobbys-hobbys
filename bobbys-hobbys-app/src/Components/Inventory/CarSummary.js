import React from 'react';
import { Link } from 'react-router-dom';

const CarSummary = ({ car }) => {
  return (
    <div className='car-summary'>
      <Link to={'/car/' + car.carId} key={car.carId}>
        <div className='card'>
          <div className='card-image'>
            <img
              src={car.profileUrl}
              alt='Car Profile'
              className='responsive-img'
            />
          </div>
          <div className='card-content'>
            <span className='card-title'>
              {car.year} {car.make} {car.model}
            </span>
            <h3>${car.price}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarSummary;
