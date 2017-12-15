const Transaction = require('../models/transaction.model');
const PAGE_LIMIT = 1000;
const REQUEST_QTY = 20;

const getTransactionCount = () => {
  return Transaction
    .count()
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getMostRecentTransactions = queryParams => {
  let {
    page,
    block: blockNumber
  } = queryParams;

  if (page == null) page = 1;
  page = Number(page);

  if (isNaN(page)) throw new Error('Page parameter must be a number.');
  if (page <= 0) throw new Error('Page cannot be less than 1.');
  if (page > PAGE_LIMIT) throw new Error('Page exceeds PAGE_LIMIT.');

  const mongoQuery = {};

  if (blockNumber != null) {
    if (blockNumber === '') throw new Error('Block parameter must be a number.'); // passing empty string for blockNumber results in 0, catch here
    blockNumber = Number(blockNumber);
    if (isNaN(blockNumber)) throw new Error('Block parameter must be a number.');
    mongoQuery.blockNumber = blockNumber;
  }

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

module.exports = {
  getTransactionCount,
  getMostRecentTransactions,
  PAGE_LIMIT,
  REQUEST_QTY
};