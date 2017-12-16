const axios = require('axios');
const blockHelpers = require('../util/blockHelpers');
const transactionHelpers = require('../util/transactionHelpers');

function getOverviewData(req, res) {
  const priceData = axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/').then(response => response.data[0]);
  const latestBlocks = blockHelpers.getLatestBlocks();
  const latestTransactions = transactionHelpers.getLatestTransactions();
  
  Promise.all([priceData, latestBlocks, latestTransactions])
    .then(([priceData, latestBlocks, latestTransactions]) => {
      res.send({
        priceData,
        latestBlocks,
        latestTransactions
      });
    })
    .catch(err => {
      res.status(400).send({
        message: err.toString()
      });
    }); 
}

module.exports = {
  getOverviewData
};