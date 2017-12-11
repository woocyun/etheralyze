const Transaction = require('../models/transaction.model');
const transactionHelpers = require('../util/transactionHelpers');

function getTransactions(req, res) {
  const page = Number(req.query.page);

  transactionHelpers
    .getTransactionCount(page)
    .then(count => {
      return transactionHelpers.getMostRecentTransactions(page)
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
      res.status(400).send({
        message: err.toString()
      });
    });
}

module.exports = {
  getTransactions
};