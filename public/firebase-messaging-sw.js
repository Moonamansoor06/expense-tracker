importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


firebase.initializaApp({
  apiKey: "AIzaSyCxrQDQtymKVyw2xKsn2T1XE78fRCJj4LE",
  authDomain: "expense-tracker-e1e77.firebaseapp.com",
  databaseURL: "https://expense-tracker-e1e77.firebaseio.com",
  projectId: "expense-tracker-e1e77",
  storageBucket: "expense-tracker-e1e77.appspot.com",
  messagingSenderId: "613575190808",
  appId: "1:613575190808:web:7df0a69c85fd370377166d",
  measurementId: "G-3YX0LK5E8F"
})
const messaging =firebase.messaging()
/* const messaging = firebase.messaging()
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      console.log('Service worker registration failed, error:', err);
    });
  }


// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
  if (currentToken) {
    sendTokenToServer(currentToken);
    updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    updateUIForPushPermissionRequired();
    setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  showToken('Error retrieving Instance ID token. ', err);
  setTokenSentToServer(false);
});



// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
  messaging.getToken().then((refreshedToken) => {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
}); */