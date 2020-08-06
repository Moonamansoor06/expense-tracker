import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
/* this will add delete and modify transactions it wil use a hook 
useState which will take current state and a function to set the new state
here it will be called fro both text and amount to update text and amount values
we are using the hook bcoz we have user input which is going to modify  the content
initial state for text is empty staring here and the amount is 0
 */
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
/*input valuewill be the text entered and in case of amount the number entered and on change we will call a function with an event as paramenter
which will call  setText and setAmount funtions which are declared in the code above
 */
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}
           placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (add - for expense, add + for income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}