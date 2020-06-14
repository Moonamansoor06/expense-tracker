import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state every global state will go into this variable
//transactions will hold the state of transactions of different components
//transactions array can hold values and can be empty initailly
const initialState = {
  transactions: []
}

// Create context it will have intial state
export const GlobalContext = createContext(initialState);


// Provider component to give access to the global state to all components
//all componants will e wrapped as children and passed to it
//dispatch is used to call areducer function App reducer is teh file contain our reducer function
//useReducer will takee the reducer function and the initial state

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  /* Actions delete and add transaction funcions will be created 
  this will give a call to reducer will will use duspatch to dispatch to the reducer and payload is
   any data sent to reducer which id id here.
   add ttransaction will take transaction as argument and called 
  */
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}/* we will attch the global comtext to provide the global state to all children
transaction will be set to the current stae of transaction 
then we will call add and delete transactions*/