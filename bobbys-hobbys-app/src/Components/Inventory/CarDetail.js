import React, { useState, useContext } from 'react';
import Carousel from './Carousel';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';

const CarDetails = props => {
  const { cars } = useContext(CarContext);
  // const [car, setCar] = useState('');
  // cars ? setCar(cars[props.match.params.carId]) : null;
  console.log(props.match.params.carId);
  console.log(cars[1]);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-image'>
              <Carousel />
            </div>
          </div>
        </div>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>2005 Volkswagen Jetta</span>
              <div className='divider' />
              <table className='striped'>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>${cars[0].price}</td>
                  </tr>
                  <tr>
                    <td>Mileage</td>
                    <td>{cars[0].mileage} Miles</td>
                  </tr>
                  <tr>
                    <td>Exterior</td>
                    <td>{cars[0].exterior}</td>
                  </tr>
                  <tr>
                    <td>Interior</td>
                    <td>{cars[0].interior}</td>
                  </tr>
                  <tr>
                    <td>Trim</td>
                    <td>{cars[0].trim}</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>{cars[0].engineSize}L V6</td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{cars[0].transmission}</td>
                  </tr>
                  <tr>
                    <td>MPG</td>
                    <td>
                      {cars[0].city} city / {cars[0].hwy} hwy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>Dealer Notes</span>
              <div className='divider' />
              <br />
              <p>{cars[0].notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
