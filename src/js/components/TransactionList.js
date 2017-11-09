import React from 'react';

const TransactionList = props => {
  return (
    <div className="transaction-list">
      {
        props.transactions.map((transaction, key) => {
          return (
            <div key={key}>
              {JSON.stringify(transaction)}
            </div>
          );
        })
      }
    </div>
  )
};

export default TransactionList;