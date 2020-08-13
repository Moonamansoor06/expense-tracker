import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import swDev from './swDev'
/* import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA27YmUndvNM0Vet3POFCtBNlH-PwAG-gc",
  authDomain: "notification-app-70d62.firebaseapp.com",
  databaseURL: "https://notification-app-70d62.firebaseio.com",
  projectId: "notification-app-70d62",
  storageBucket: "notification-app-70d62.appspot.com",
  messagingSenderId: "673190115330",
  appId: "1:673190115330:web:8a09446abef9e81019cf1b"
};

firebase.initializeApp(require(firebaseConfig));
 */
//import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);
swDev();
//serviceWorker.unregister(); /* change from unregister to register */