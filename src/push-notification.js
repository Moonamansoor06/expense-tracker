import firebase from 'firebase'

export const initializeFirebase = () => {
/*   const config = messagingSenderId= "765137182488"
};
    firebase.initializeApp(config) */
  firebase.initializeApp({
    apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
  authDomain: "expense-tracker-e1e77.firebaseapp.com",
  databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
  projectId: "expense-tracker-e1e77",
  storageBucket: "expense-tracker-e1e77.appspot.com",
  messagingSenderId: "613575190808",
  appId: "1:613575190808:web:7df0a69c85fd370377166d",
  measurementId: "G-3YX0LK5E8F"}
  )}

 export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Token:', token);
      
      return (token
    
        )
    } catch (error) {
      console.error("error fetching token",error);
    } 
//    sendNotification();
 }
 
