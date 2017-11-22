const Block = require('../models/block.model');

const BLOCK_LIMIT = 100;

const getBlockCount = () => {
  return Block
    .count()
    .exec((err, count) => {
      if (err) throw new Error(err);
      return count;
    });
};

const getBlocksInRange = ($lt, $gt) => {
  return Block
    .find({
      number: { $lt, $gt }
    })
    .sort({ number: -1 })
    .limit(BLOCK_LIMIT)
    .exec((err, blocks) => {
      if (err) {
        throw new Error(err);
      } else {
        return blocks;
      }
    });
};

module.exports = {
  getBlockCount,
  getBlocksInRange
};