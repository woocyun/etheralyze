const Web3 = require('web3');
const async = require('async');
const Block = require('../models/block.model');
const blockHelpers = require('../util/blockhelpers');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getBlocks(req, res) {
  const page = Number(req.query.page);

  blockHelpers
    .getBlockCount()
    .then(count => {
      return blockHelpers.getBlocksInRange(page, count)
        .then(blocks => ({ count, blocks }));
    })
    .then(({ count, blocks }) => {
      res.send({
        pagination: {
          total: count,
          perPage: blockHelpers.REQUEST_QTY
        },
        blocks
      });
    })
    .catch(err => {
      res.status(400).send({
        message: err.toString()
      });
    });
}

function getBlock(req, res) {
  const blockNumber = Number(req.query.number);

  blockHelpers
    .getBlockByNumber(blockNumber)
    .then(block => {
      res.send(block);
    })
    .catch(err => {
      res.status(400).send(err);
    });
}

module.exports = {
  getBlocks,
  getBlock
};