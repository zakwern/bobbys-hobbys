import React, { createContext, useState } from 'react';
import firebase from '../Config/fbConfig';

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
