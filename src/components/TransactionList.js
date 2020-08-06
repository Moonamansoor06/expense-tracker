import React, { useContext } from 'react';
import { Transaction } from './Transaction';
//global contaxt will be imported to use global state by using use context hook
import { GlobalContext } from '../context/GlobalState';
/* This will render the whole lists comprising of transaction elements imported from Transaction */
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} 
        transaction={transaction} />))}
      </ul>
    </>
  )
}