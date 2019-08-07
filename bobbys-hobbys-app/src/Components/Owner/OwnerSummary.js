import React from 'react';
import Car1 from '../../Images/car1.jpg';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const OwnerSummary = ({ car }) => {
  return (
    <div className='car-summary'>
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
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default OwnerSummary;
