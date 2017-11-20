const Web3 = require('web3');
const Block = require('../models/block.model');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getBlocks(req, res) {
  Block
    .find({})
    .sort({ number: -1 })
    .limit(50)
    .exec((err, blocks) => {
      if (err) res.status(500).send(err);
      res.send(blocks);
    });
}

module.exports = {
  getBlocks
};