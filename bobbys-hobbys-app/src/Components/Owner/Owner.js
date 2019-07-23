import React, { useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext.js';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import OwnerSummary from './OwnerSummary.js';

const Owner = () => {
  const { cars } = useContext(CarContext);
  console.log(cars);
  return (
    <div className='container'>
      <h5>Your Current Inventory</h5>
      <div className='row'>
        <Link to={'/addcar'}>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Add a Car
          </button>
        </Link>
      </div>
      <div className='row'>
        <div className='col s12 xl6'>
          {cars.map(car => {
            return <OwnerSummary car={car} key={car.carId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Owner;
