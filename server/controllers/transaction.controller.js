const Transaction = require('../models/transaction.model');
const transactionHelpers = require('../util/transactionHelpers');

function getTransactions(req, res) {
  const page = req.query.page ? Number(req.query.page) : 1;
  const qty = req.query.qty ? Number(req.query.qty) : 10;

  transactionHelpers
    .getTransactionCount(page, qty)
    .then(count => {
      return transactionHelpers.getMostRecentTransactions(page, qty)
        .then(transactions => ({ count, transactions }));
    })
    .then(({ count, transactions }) => {
      res.send({
        pagination: {
          total: count,
          limit: transactionHelpers.TRANSACTION_LIMIT
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