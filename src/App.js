import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
//import {askForPermissionToReceiveNotifications} from "./push-notification"
import './App.css';
//import {initNotification} from "./services/firebaseService"
//import firebase from 'firebase';

import { requestFirebaseNotificationPermission } from './firebaseInit'


function App() {
  requestFirebaseNotificationPermission()
  .then((firebaseToken) => {
    // eslint-disable-next-line no-console
    console.log("token===>",firebaseToken);
  })
  .catch((err) => {
    return err;
  });
  
/*   React.useEffect(() => {
    const msg=firebase.messaging();
    msg.requestPermission().then(() => {
        
        return msg.getToken();}).then((data)=>{
         console.warn("token", data)
        })
           
           .catch((err) => {
               console.log("An error occurred while retrieving token. ", err);
           })
          }) */
    /*   messaging.onMessage(function(payload){
        console.log("on message", payload);
      })
        */
       /* if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(function(reg) {
      
          if(reg.installing) {
            console.log('Service worker installing');
          } else if(reg.waiting) {
            console.log('Service worker installed');
          } else if(reg.active) {
            console.log('Service worker active');
          }
      
        }).catch(function(error) {
          // registration failed
          console.log('Registration failed with ' + error);
        });
      } */
      //  askForPermissionToReceiveNotifications();
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
       {/*  <button onClick={initNotification}>Configure Notifications</button> */}
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;