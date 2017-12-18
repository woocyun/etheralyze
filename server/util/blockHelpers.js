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

const getBlocksInRange = (mongoQuery) => {
  return Block
    .find(mongoQuery)
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

const getLatestBlocks = () => {
  return Block
    .find()
    .sort({ number: -1 })
    .limit(10)
    .exec((err, blocks) => {
      if (err) {
        throw new Error(err);
      } else {
        return blocks;
      }
    });
}

module.exports = {
  getBlockCount,
  getBlocksInRange,
  getBlockByNumber,
  getLatestBlocks,
  REQUEST_QTY
};