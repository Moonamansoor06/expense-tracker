import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import sw from './sw'
import firebase from 'firebase'

// import  firebase from './firebase'
import * as serviceWorker from './serviceWorker';

//firebase.initializeApp();
 
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
//sw();
serviceWorker.register(); /* change from unregister to register */
firebase.initializeApp({ apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
authDomain: "expense-tracker-e1e77.firebaseapp.com",
databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
projectId: "expense-tracker-e1e77",
storageBucket: "expense-tracker-e1e77.appspot.com",
messagingSenderId: "613575190808",
appId: "1:613575190808:web:7df0a69c85fd370377166d",
measurementId: "G-3YX0LK5E8F"})