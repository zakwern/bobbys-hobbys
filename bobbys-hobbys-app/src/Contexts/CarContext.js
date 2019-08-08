import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Config/fbConfig';

export const CarContext = createContext();

const CarContextProvider = props => {
  const [cars, setCars] = useState([]);
  // const [profileUrl, setProfileUrl] = useState(null);
  const [profileUrl, setProfileUrl] = useState('');

  const addCar = (
    selectedImage,
    cylinder,
    engineSize,
    exterior,
    interior,
    make,
    mileage,
    model,
    notes,
    price,
    transmission,
    trim,
    year
  ) => {
    firebase
      .storage()
      .ref(`images/${selectedImage.name}`)
      .put(selectedImage)
      .then(() => {
        firebase
          .storage()
          .ref('images')
          .child(selectedImage.name)
          .getDownloadURL()
          .then(url => {
            //unable to capture url string with setProfileUrl
            console.log(url);
            console.log(typeof url);
            setProfileUrl(url);
            console.log(profileUrl);
          });
      })
      .then(() => {
        firebase
          .firestore()
          .collection('cars')
          .add({
            profileUrl,
            cylinder,
            engineSize,
            exterior,
            interior,
            make,
            mileage,
            model,
            notes,
            price,
            transmission,
            trim,
            year
          });
      });
  };

  const removeCar = carId => {
    setCars(cars.filter(car => car.carId !== carId));
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection('cars')
      .onSnapshot(snapshot => {
        const newCars = snapshot.docs.map(doc => ({
          carId: doc.id,
          ...doc.data()
        }));
        setCars(newCars);
      });
  }, []);

  return (
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
