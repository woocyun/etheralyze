const Transaction = require('../models/transaction.model');

const TRANSACTION_LIMIT = 100;

const getTransactionCount = () => {
  return Transaction
    .count()
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getMostRecentTransactions = (page, qty) => {
  return Transaction
    .find({})
    .sort([['blockNumber', -1], ['transactionIndex', -1]])
    .skip((page - 1) * qty)
    .limit(qty < TRANSACTION_LIMIT ? qty : TRANSACTION_LIMIT)
    .exec((err, transactions) => {
      console.log(err);
      if (err) {
        throw new Error(err);
      } else {
        return transactions;
      }
    });
};

module.exports = {
  getTransactionCount,
  getMostRecentTransactions,
  TRANSACTION_LIMIT
};