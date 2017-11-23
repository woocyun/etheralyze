const Web3 = require('web3');
const async = require('async');
const Block = require('../models/block.model');
const blockHelpers = require('../util/blockhelpers');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getBlocks(req, res) {
  const page = Number(req.query.page);
  const qty = Number(req.query.qty);

  blockHelpers
    .getBlockCount()
    .then(count => {
      return blockHelpers.getBlocksInRange(
        count - ((page - 1) * qty),
        count - ((page - 1) * qty + qty + 1)
      )
        .then(blocks => ({count, blocks}));
    })
    .then(({ count, blocks }) => {
      res.send({
        pagination: {
          total: count
        },
        blocks
      });
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

module.exports = {
  getBlocks
};