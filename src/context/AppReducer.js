/*it will spcify the state changes
switch will select on basic of the action passed to it
it will chnage the staet in each case and send the value back to the 
tansaction values will bw sent back to the components
add and delete actions will be performed according to given commends 
*/
export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }