const Web3 = require('web3');
const Block = require('../models/block.model');

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA));

function getBlocks(req, res) {
  const promises = [];

  promises.push(
    new Promise((resolve, reject) => {
      Block.count()
        .exec((err, count) => {
          if (err) reject(err);
          resolve(count);
        });
    }),
    new Promise((resolve, reject) => {
      Block
        .find({})
        .sort({ number: -1 })
        .limit(50)
        .exec((err, blocks) => {
          if (err) reject(err);
          resolve(blocks);
        });
    })
  );

  Promise.all(promises)
    .then(response => {
      const totalBlocks = response[0];
      const blocks = response[1];

      res.send({
        pagination: {
          total: totalBlocks
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