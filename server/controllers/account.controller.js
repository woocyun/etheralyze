const transactionHelpers = require('../util/transactionHelpers');
const web3Helper = require('../util/web3Helper');

function getAccount(req, res) {
  const accountHash = req.query.hash;
  const transactionQuery = {
    $or: [{ to: accountHash }, { from: accountHash }]
  };

  Promise.all([
    web3Helper.getAccountBalance(accountHash),
    transactionHelpers.getTransactionCount(transactionQuery),
    transactionHelpers.getLatestTransactions(transactionQuery)
  ])
    .then(([balance, transactionCount, transactions]) => {
      res.send({
        accountHash,
        balance: balance.toNumber(),
        transactionCount,
        transactions
      });
    })
    .catch(error => {
      console.log('error', error)
      res
        .status(500)
        .json({ error });
    });
}

function searchAccounts(req, res) {
  const query = req.params.query;

  Transaction
    .find({
      $or: [{
        to: { $regex: query }
      }, {
        from: { $regex: query }
      }]
    })
    .limit(10)
    .exec((err, accounts) => {
      if (err) {
        res
          .status(500)
          .send(err);
      }

      res.send({
        accounts
      });
    });
}

module.exports = {
  getAccount,
  searchAccounts
};