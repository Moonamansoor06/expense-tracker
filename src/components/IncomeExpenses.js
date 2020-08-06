import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
/* Income expences Component */
export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
/**
 declare variable amount and do calculations over the state of transactions amount 
and save in the variable and return income and expense funtions
 */
  const amounts = transactions.map(transaction => transaction.id);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">{expense}</p>
        </div>
      </div>
  )
}