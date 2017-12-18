const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.PARITY));

function getAccountBalance(accountHash) {
  return new Promise((resolve, reject) => {
    web3.eth.getBalance(accountHash, (err, balance) => {
      if (err) reject(err);
      resolve(balance);
    });
  });
}

function getAccountTransactionCount(accountHash) {
  return new Promise((resolve, reject) => {
    web3.eth.getTransactionCount(accountHash, (err, transactionCount) => {
      if (err) reject(err);
      resolve(transactionCount);
    });
  });
}

module.exports = {
  getAccountBalance,
  getAccountTransactionCount
};