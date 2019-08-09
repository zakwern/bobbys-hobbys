import React, { useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext.js';
import AuthContextProvider, {
  AuthContext
} from '../../Contexts/AuthContext.js';
import { Link } from 'react-router-dom';
import OwnerSummary from './OwnerSummary.js';
import { Redirect } from 'react-router-dom';

const Owner = () => {
  const { cars } = useContext(CarContext);
  const { user, logout } = useContext(AuthContext);
  if (user === false) return <Redirect to='/login' />;

  const leftCol = cars => {
    for (let i = 0; i < cars.length; i += 2) {
      return <OwnerSummary car={cars[i]} key={cars[i].carId} />;
    }
  };

  const rightCol = cars => {
    for (let i = 1; i < cars.length; i += 2) {
      return <OwnerSummary car={cars[i]} key={cars[i].carId} />;
    }
  };

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
          <button className='btn' onClick={logout}>
            Sign Out
          </button>
        </Link>
      </div>
      <div className='row hide-on-large-only'>
        <div className='col s12'>
          {cars.map(car => {
            return <OwnerSummary car={car} key={car.carId} />;
          })}
        </div>
      </div>
      <div className='row hide-on-med-and-down'>
        <div className='col m6'>{leftCol(cars)}</div>
        <div className='col m6'>{rightCol(cars)}</div>
      </div>
    </div>
  );
};

export default Owner;
