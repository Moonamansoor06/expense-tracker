import firebase from 'firebase/app';
import 'firebase/messaging';

const config ={ apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
authDomain: "expense-tracker-e1e77.firebaseapp.com",
databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
projectId: "expense-tracker-e1e77",
storageBucket: "expense-tracker-e1e77.appspot.com",
messagingSenderId: "613575190808",
appId: "1:613575190808:web:7df0a69c85fd370377166d",
measurementId: "G-3YX0LK5E8F"};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here
export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });