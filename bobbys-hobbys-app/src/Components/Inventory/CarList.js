import React, { useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';
import CarSummary from './CarSummary';

const CarList = () => {
  const { cars } = useContext(CarContext);

  const leftCol = cars => {
    for (let i = 0; i < cars.length; i += 2) {
      return <CarSummary car={cars[i]} key={cars[i].carId} />;
    }
  };

  const rightCol = cars => {
    for (let i = 1; i < cars.length; i += 2) {
      return <CarSummary car={cars[i]} key={cars[i].carId} />;
    }
  };

  return (
    <div className='container'>
      <h5>Inventory</h5>
      <div className='row hide-on-large-only'>
        <div className='col s12'>
          {cars.map(car => {
            return <CarSummary car={car} key={car.carId} />;
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

export default CarList;
