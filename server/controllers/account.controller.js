const Web3 = require('web3');
const Transaction = require('../models/transaction');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getAccount(req, res) {
  const address = req.params.id;

  const promises = [];
  
  const balancePromise = new Promise((resolve, reject) => {
    web3.eth.getBalance(address, (err, balance) => {
      if (err) reject(err);
      resolve(balance);
    });
  });

  const transactionCountPromise = new Promise((resolve, reject) => {
    Transaction
      .find({
        $or: [{ to: address }, { from: address }]
      })
      .count({}, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });

  const transactionsPromise = new Promise((resolve, reject) => {
    Transaction
      .find({
        $or: [{ to: address }, { from: address }]
      })
      .limit(10)
      .sort({
        blockNumber: 'desc',
        transactionIndex: 'desc'
      })
      .exec((err, res) => {
        if (err) reject(err);
        resolve(res);
      });
  });

  promises.push(balancePromise, transactionCountPromise, transactionsPromise);

  Promise.all(promises)
    .then(([balance, transactionCount, transactions]) => {
      res.send({
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

module.exports = {
  getAccount
};