import React from 'react';
// import CarSummary from './CarSummary';
import { Link } from 'react-router-dom';
import Car1 from '../../Images/car1.jpg';
import Car2 from '../../Images/car2.jpg';

// const CarList = ({cars}) => {
//  return (
//   <div className="car-list section">
//    { cars && cars.map(car => {
//     return (
//       <div className="container">
//         <h5>Inventory</h5>
//         <div className="row">
//           <div className="col s12 xl6">
//             <Link to={'/car/' + car.id} key={car.id}>
//               <CarSummary car={car} />
//             </Link>
//           </div>
//           <div className="col s12 xl6">
//             <Link to={'/car/' + car.id} key={car.id}>
//               <CarSummary car={car} />
//             </Link>
//           </div>
//         </div>
//       </div>
//     )
//    })}
//   </div>
//  )
// }

const CarList = () => {
  return (
    <div className='container'>
      <h5>Inventory</h5>
      <div className='row'>
        <div className='col s12 xl6'>
          <Link to={'/car/1'}>
            <div className='card horizontal'>
              <div className='card-image'>
                <img src={Car1} alt='' className='responsive-img' />
              </div>
              <div className='card-content'>
                <span className='card-title'>2005 Volkswagen Jetta</span>
                <p>4 wheel drive, 6 cylinder, yatta, yatta, yatta</p>
              </div>
            </div>
          </Link>
        </div>
        <div className='col s12 xl6'>
          <div className='card horizontal'>
            <div className='card-image'>
              <img src={Car2} alt='' className='responsive-img' />
            </div>
            <div className='card-content'>
              <span className='card-title'>2005 Volkswagen Jetta</span>
              <p>4 wheel drive, 6 cylinder, yatta, yatta, yatta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
