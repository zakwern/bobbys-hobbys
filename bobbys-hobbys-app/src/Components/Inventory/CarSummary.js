import React from 'react';
import Car1 from '../../Images/car1.jpg';
import { Link } from 'react-router-dom';

const CarSummary = ({ car }) => {
  return (
    <div className='car-summary'>
      <Link to={'/car/' + car.id} key={car.id}>
        <div className='card'>
          <div className='card-image'>
            <img src={Car1} alt='' className='responsive-img' />
          </div>
          <div className='card-content'>
            <span className='card-title'>
              {car.year} {car.make} {car.model}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarSummary;
