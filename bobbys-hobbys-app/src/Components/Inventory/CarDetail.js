import React, { useContext } from 'react';
import Carousel from './Carousel';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';

const CarDetails = props => {
  const { cars } = useContext(CarContext);
  const car = cars.filter(car => car.carId === props.match.params.carId);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-image'>
              {/* <Carousel /> */}
              <img
                src={car[0].profileUrl}
                alt='Car Profile'
                className='responsive-img'
              />
            </div>
          </div>
          <div className='card'>
            <div className='card-content'>
              <p>
                To inquire about this car please contact Bob at (845) 475-5275
              </p>
            </div>
          </div>
        </div>
        <div className='col s12 l6'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title'>
                {car[0].year} {car[0].make} {car[0].model}
              </span>
              <div className='divider' />
              <table className='striped'>
                <tbody>
                  <tr>
                    <td>Price</td>
                    <td>${car[0].price}</td>
                  </tr>
                  <tr>
                    <td>Mileage</td>
                    <td>{car[0].mileage} Miles</td>
                  </tr>
                  <tr>
                    <td>Exterior</td>
                    <td>{car[0].exterior}</td>
                  </tr>
                  <tr>
                    <td>Interior</td>
                    <td>{car[0].interior}</td>
                  </tr>
                  <tr>
                    <td>Trim</td>
                    <td>{car[0].trim}</td>
                  </tr>
                  <tr>
                    <td>Engine</td>
                    <td>
                      {car[0].engineSize}L {car[0].cylinder}
                    </td>
                  </tr>
                  <tr>
                    <td>Transmission</td>
                    <td>{car[0].transmission}</td>
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
              <p>{car[0].notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
