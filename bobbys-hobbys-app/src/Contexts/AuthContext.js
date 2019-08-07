import React, { createContext, useState, useEffect } from 'react';
import firebase from '../Config/fbConfig';
import { Redirect } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [user, setUser] = useState(false);

  const login = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        // console.log(firebase.auth().currentUser.uid);
        setUser(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
