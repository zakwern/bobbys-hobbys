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
      .then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
          cars.push(doc.data());
        });
        setCars(cars);
      });
  }, [cars]);

  return (
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
