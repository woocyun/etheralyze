const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = mongoose.Schema({
  blockHash: { type: String },
  blockNumber: { type: Number, index: true },
  from: { type: String, index: true },
  gas: { type: Number },
  gasPrice: { type: String },
  hash: { type: String, unique: true },
  input: { type: String },
  nonce: { type: Number },
  to: { type: String, index: true },
  transactionIndex: { type: Number },
  value: { type: String, index: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);