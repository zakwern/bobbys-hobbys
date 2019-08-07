import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBBw0YMDmSSTUKEczr5HlstOI0V8bbG3B4',
  authDomain: 'bobbys-hobbys.firebaseapp.com',
  databaseURL: 'https://bobbys-hobbys.firebaseio.com',
  projectId: 'bobbys-hobbys',
  storageBucket: 'bobbys-hobbys.appspot.com',
  messagingSenderId: '88699518935',
  appId: '1:88699518935:web:d74027cb861511fd'
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.storage();

export default firebase;
