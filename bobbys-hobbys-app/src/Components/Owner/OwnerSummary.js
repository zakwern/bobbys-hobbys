import React, { useContext } from 'react';
import Modal from './Modal';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';

const OwnerSummary = ({ car }) => {
  const { removeCar } = useContext(CarContext);

  const handleClick = e => {
    e.preventDefault();
    removeCar(car.carId, car.profileUrl);
  };

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
          {/* <Modal /> */}
          <button
            className='waves-effect waves-light btn'
            onClick={handleClick}
          >
            Remove car
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerSummary;
