import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Config/fbConfig';

export const CarContext = createContext();

const CarContextProvider = props => {
  const [cars, setCars] = useState([]);

  const addCar = id => {
    setCars([...cars, { id }]);
  };

  const removeCar = id => {
    setCars(cars.filter(car => car.id !== id));
  };

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('cars')
      .get()
      .then(data => {
        let newCar = [];
        data.forEach(doc => {
          newCar.push({
            carId: doc.id,
            city: doc.data().city,
            cylinder: doc.data().cylinder,
            engineSize: doc.data().engineSize,
            exterior: doc.data().exterior,
            hwy: doc.data().hwy,
            interior: doc.data().interior,
            make: doc.data().make,
            mileage: doc.data().mileage,
            model: doc.data().model,
            notes: doc.data().notes,
            price: doc.data().price,
            transmission: doc.data().transmission,
            trim: doc.data().trim,
            year: doc.data().year
          });
          setCars(newCar);
        });
      });
  }, []);

  return (
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
