const Transaction = require('../models/transaction.model');
const REQUEST_QTY = 20;
const PAGE_LIMIT = 1000;

const getTransactionCount = mongoQuery => {
  return Transaction
    .count(mongoQuery)
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getMostRecentTransactions = (page, mongoQuery) => {
  return Transaction
    .find(mongoQuery)
    .sort([['blockNumber', -1], ['transactionIndex', -1]])
    .skip((page - 1) * REQUEST_QTY)
    .limit(REQUEST_QTY)
    .exec((err, transactions) => {
      if (err) {
        throw new Error(err);
      } else {
        return transactions;
      }
    });
};

const getLatestTransactions = () => {
  return Transaction
    .find()
    .sort([['blockNumber', -1], ['transactionIndex', -1]])
    .limit(5)
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
  getLatestTransactions,
  REQUEST_QTY,
  PAGE_LIMIT
};