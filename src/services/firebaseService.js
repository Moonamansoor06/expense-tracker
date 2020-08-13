import  firebase from 'firebase'

{/* <script src="https://www.gstatic.com/firebasejs//firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-messaging.js"></script>
 */}
/* const firebaseConfig = {
    apiKey: "AIzaSyA27YmUndvNM0Vet3POFCtBNlH-PwAG-gc",
    authDomain: "notification-app-70d62.firebaseapp.com",
    databaseURL: "https://notification-app-70d62.firebaseio.com",
    projectId: "notification-app-70d62",
    storageBucket: "notification-app-70d62.appspot.com",
    messagingSenderId: "673190115330",
    appId: "1:673190115330:web:8a09446abef9e81019cf1b"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging(); */

/* export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
     
      messaging.getToken().then((currentToken) => {
          if (currentToken) {
           console.log("TOKEN =>",currentToken)
          } else {
            // Show permission request.
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
            // Show permission UI.
           
          }
        })
         .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        
        });
    }
  });
  
}
 */