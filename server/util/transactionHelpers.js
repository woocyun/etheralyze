const Transaction = require('../models/transaction.model');

const QTY_LIMIT = 20;
const TRANSACTION_LIMIT = 19999;

const getTransactionCount = () => {
  return Transaction
    .count()
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getMostRecentTransactions = (page = 1, qty = 20) => {
  if (qty > QTY_LIMIT) throw new Error('Exceeded QUANTITY_LIMIT');
  if (qty * page > TRANSACTION_LIMIT + 1) throw new Error('Exceeded TRANSACTION_LIMIT.');

  return Transaction
    .find({})
    .sort([['blockNumber', -1], ['transactionIndex', -1]])
    .skip((page - 1) * qty)
    .limit(qty < TRANSACTION_LIMIT ? qty : TRANSACTION_LIMIT)
    .exec((err, transactions) => {
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