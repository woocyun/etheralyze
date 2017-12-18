const async = require('async');
const Block = require('../models/block.model');
const blockHelpers = require('../util/blockHelpers');

function getBlocks(req, res) {
  let {
    page
  } = req.query;
  
  if (page == null) page = 1;
  page = Number(page);

  if (isNaN(page)) handleError(new Error('Page parameter must be a number.'), res);
  if (page <= 0) handleError(new Error('Page cannot be less than 1.', res));

  blockHelpers
    .getBlockCount()
    .then(count => {
      return blockHelpers.getBlocksInRange({
        number: {
          $lt: count - ((page - 1) * blockHelpers.REQUEST_QTY),
          $gt: count - ((page - 1) * blockHelpers.REQUEST_QTY + blockHelpers.REQUEST_QTY + 1)
        }
      })
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
      handleError(err, res);
    });
}

function getBlock(req, res) {
  const blockNumber = Number(req.query.number);

  if (isNaN(blockNumber)) handleError(new Error('Got NaN for block number.'));

  blockHelpers
    .getBlockByNumber(blockNumber)
    .then(block => {
      res.send(block);
    })
    .catch(err => {
      handleError(err, res);
    });
}

function handleError(err, res) {
  res.status(400).send({
    message: err.toString()
  });
}

module.exports = {
  getBlocks,
  getBlock
};