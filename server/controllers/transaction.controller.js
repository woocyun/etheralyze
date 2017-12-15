const Transaction = require('../models/transaction.model');
const transactionHelpers = require('../util/transactionHelpers');

function getTransactions(req, res) {
  let {
    page,
    block: blockNumber
  } = req.query;

  if (page == null) page = 1;
  page = Number(page);

  if (isNaN(page)) handleError(new Error('Page parameter must be a number.'), res);
  if (page <= 0) handleError(new Error('Page cannot be less than 1.'), res);
  if (page > transactionHelpers.PAGE_LIMIT) handleError(new Error('Page exceeds page limit.'), res);

  const mongoQuery = {};

  if (blockNumber != null) {
    if (blockNumber === '') handleError(new Error('Block parameter must be a number.'), res); // passing empty string for blockNumber results in 0, catch here
    blockNumber = Number(blockNumber);
    if (isNaN(blockNumber)) handleError(new Error('Block parameter must be a number.'), res);
    mongoQuery.blockNumber = blockNumber;
  }

  transactionHelpers
    .getTransactionCount(mongoQuery)
    .then(count => {
      return transactionHelpers.getMostRecentTransactions(page, mongoQuery)
        .then(transactions => ({ count, transactions }));
    })
    .then(({ count, transactions }) => {
      res.send({
        pagination: {
          total: (count <= transactionHelpers.PAGE_LIMIT * transactionHelpers.REQUEST_QTY) ? count : transactionHelpers.PAGE_LIMIT * transactionHelpers.REQUEST_QTY - 1,
          perPage: transactionHelpers.REQUEST_QTY
        },
        transactions
      });
    })
    .catch(err => {
      handleError(err);
    });
}

function handleError(err, res) {
  res.status(400).send({
    message: err.toString()
  });
}

module.exports = {
  getTransactions
};