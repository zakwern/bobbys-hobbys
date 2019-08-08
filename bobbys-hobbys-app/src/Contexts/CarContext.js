import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Config/fbConfig';

export const CarContext = createContext();

const CarContextProvider = props => {
  // Get cars array state
  const [cars, setCars] = useState([]);

  // Various Add car state parameters
  const [profileUrl, setProfileUrl] = useState('');
  const [cylinder, setCylinder] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [exterior, setExterior] = useState('');
  const [interior, setInterior] = useState('');
  const [make, setMake] = useState('');
  const [mileage, setMileage] = useState('');
  const [model, setModel] = useState('');
  const [notes, setNotes] = useState('');
  const [price, setPrice] = useState('');
  const [transmission, setTransmission] = useState('');
  const [trim, setTrim] = useState('');
  const [year, setYear] = useState('');

  // uploads selectedImage to Firebase Storage and updates state
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
    setCylinder(cylinder);
    setEngineSize(engineSize);
    setExterior(exterior);
    setInterior(interior);
    setMake(make);
    setMileage(mileage);
    setModel(model);
    setNotes(notes);
    setPrice(price);
    setTransmission(transmission);
    setTrim(trim);
    setYear(year);
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
            setProfileUrl(url);
          });
      });
  };

  const removeCar = (carId, url) => {
    console.log(carId, url);
    let image = firebase.storage().refFromURL(url);
    image.delete().then(
      firebase
        .firestore()
        .collection('cars')
        .doc(carId)
        .delete()
    );
  };

  // Grabs car list
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

  // Uploads car object when profileUrl changes and is not ''
  useEffect(() => {
    if (profileUrl !== '')
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
    setProfileUrl('');
  }, [profileUrl]);

  return (
    <CarContext.Provider value={{ cars, addCar, removeCar }}>
      {props.children}
    </CarContext.Provider>
  );
};

export default CarContextProvider;
