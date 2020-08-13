import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
//import {initNotification} from "./services/firebaseService"
import firebase from './firebase'
import { messaging } from 'firebase';

function App() {
  React.useEffect(() => {
    const msg=firebase.messaging();
    msg.requestPermission().then(() => {
        
        return msg.getToken();}).then((data)=>{
         console.warn("token", data)
        })
           
           .catch((err) => {
               console.log("An error occurred while retrieving token. ", err);
           })
          })
    /*   messaging.onMessage(function(payload){
        console.log("on message", payload);
      })
        */
  
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