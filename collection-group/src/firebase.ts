import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDuXOXXUuubemXHZxffWFZfV7pKmlhXbog',
  authDomain: 'code-shelf-944f8.firebaseapp.com',
  databaseURL: 'https://code-shelf-944f8.firebaseio.com',
  projectId: 'code-shelf-944f8',
  storageBucket: 'code-shelf-944f8.appspot.com',
  messagingSenderId: '554024020632',
  appId: '1:554024020632:web:d403ab3e5f1c5fa57b7eed',
  measurementId: 'G-L3F04BB84Y',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
