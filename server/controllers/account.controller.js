const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getAccount(req, res) {
  const promises = [];
  
  const balancePromise = new Promise((resolve, reject) => {
    web3.eth.getBalance(req.params.id, (err, balance) => {
      if (err) reject(err);
      resolve(balance);
    });
  });

  const transactionCountPromise = new Promise((resolve, reject) => {
    web3.eth.getTransactionCount(req.params.id, (err, transactionCount) => {
      if (err) reject(err);
      resolve(transactionCount);
    });
  });

  promises.push(balancePromise, transactionCountPromise);

  Promise.all(promises)
    .then(([balance, transactionCount]) => {
      res.send({
        balance: balance.toNumber(),
        transactionCount
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