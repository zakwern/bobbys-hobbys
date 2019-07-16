import React, { useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext.js';
import { Link } from 'react-router-dom';
import CarSummary from './CarSummary.js';

// const CarList = ({cars}) => {
//  return (
//   <div className="car-list section">
//    <h5>Inventory</h5>
//    { cars && cars.map(car => {
//     return (
//       <div className="container">
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
  const { cars } = useContext(CarContext);
  console.log(cars);
  console.log('However the length of the cars array is', cars.length);
  return (
    <div className='container'>
      <h5>Inventory</h5>
      <div className='row'>
        <div className='col s12 xl6'>
          {/* {cars.map(car => {
            return <CarSummary car={car} key={car.id} />;
          })} */}
          <div className='card'>
            {cars.map(car => (
              <div>{car.model}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
