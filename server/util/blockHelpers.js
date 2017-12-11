const Block = require('../models/block.model');

const REQUEST_QTY = 20;

const getBlockCount = () => {
  return Block
    .count()
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getBlocksInRange = (page, totalBlockCount) => {
  if (isNaN(page)) throw new Error('Page parameter must be a number.');
  if (page <= 0) throw new Error('Page cannot be less than 1.');

  const $lt = totalBlockCount - ((page - 1) * REQUEST_QTY);
  const $gt = totalBlockCount - ((page - 1) * REQUEST_QTY + REQUEST_QTY + 1);

  return Block
    .find({
      number: { $lt, $gt }
    })
    .sort({ number: -1 })
    .exec((err, blocks) => {
      if (err) {
        throw new Error(err);
      } else {
        return blocks;
      }
    });
};

const getBlockByNumber = number => {
  return Block
    .findOne({ number })
    .exec((err, block) => {
      if (err) {
        throw new Error(err);
      } else {
        return block;
      }
    });
};

module.exports = {
  getBlockCount,
  getBlocksInRange,
  getBlockByNumber,
  REQUEST_QTY
};