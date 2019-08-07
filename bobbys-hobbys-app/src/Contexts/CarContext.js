import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Config/fbConfig';

export const CarContext = createContext();

const CarContextProvider = props => {
  const [cars, setCars] = useState([]);
  const [progress, setProgress] = useState(null);
  const [profileUrl, setProfileUrl] = useState(null);

  const addCar = (
    selectedImage,
    city,
    cylinder,
    engineSize,
    exterior,
    hwy,
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
    const uploadTask = firebase
      .storage()
      .ref(`images/${selectedImage.name}`)
      .put(selectedImage);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        // complete function ....
        firebase
          .storage()
          .ref('images')
          .child(selectedImage.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setProfileUrl(url);
          });
      }
    );
    setCars([
      ...cars,
      {
        profileUrl,
        city,
        cylinder,
        engineSize,
        exterior,
        hwy,
        interior,
        make,
        mileage,
        model,
        notes,
        price,
        transmission,
        trim,
        year
      }
    ]);
    // setProfileUrl('')
  };

  const removeCar = carId => {
    setCars(cars.filter(car => car.carId !== carId));
  };

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('cars')
      .get()
      .then(data => {
        let newCar = [];
        data.forEach(doc => {
          newCar.push({
            profileUrl: doc.data().profileUrl,
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
