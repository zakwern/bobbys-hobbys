import React from 'react';
import Car1 from '../../Images/car1.jpg';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const OwnerSummary = ({ car }) => {
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
            <h3>${car.price}</h3>
            {/* <Link to={'/addcar'}>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                Remove Car
              </button>
            </Link> */}
            <Modal />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default OwnerSummary;
