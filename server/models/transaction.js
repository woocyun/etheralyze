const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = mongoose.Schema({
  blockNumber: { type: Number, required: true, index: true },
  blockHash: { type: String, required: true },
  from: { type: String, required: true, index: true },
  gas: { type: Number, required: true },
  gasPrice: { type: String, required: true, index: true },
  hash: { type: String, required: true, index: true, unique: true },
  input: { type: String, required: true },
  nonce: { type: Number, required: true },
  to: { type: String, index: true },
  transactionIndex: { type: Number, required: true, index: true },
  value: { type: String, required: true, index: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);