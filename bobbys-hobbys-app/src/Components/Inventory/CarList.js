import React, { useContext } from 'react';
import CarContextProvider, { CarContext } from '../../Contexts/CarContext';
import CarSummary from './CarSummary';

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
  // if (cars.length < 2) {
  //   return <span>Inventory Loading ...</span>;
  // }
  return (
    <div className='container'>
      <h5>Inventory</h5>
      <div className='row'>
        <div className='col s12 xl6'>
          {cars.map(car => {
            return <CarSummary car={car} key={car.carId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CarList;
