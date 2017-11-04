const Router = require('express').Router;
const router = new Router();
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

router
  .route('/foo')
  .get((req, res) => {
    web3.eth.getBlockNumber((err, block) => {
      res.json({
        blockNumber: block
      });
    });
  });

module.exports = router;