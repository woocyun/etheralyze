const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  blockNumber: { type: Number, required: true },
  blockHash: { type: String, required: true },
  from: { type: String, required: true },
  gas: { type: Number, required: true },
  gasPrice: { type: String, required: true },
  hash: { type: String, required: true, unique: true },
  input: { type: String, required: true },
  nonce: { type: Number, required: true },
  to: { type: String },
  transactionIndex: { type: Number, required: true },
  value: { type: String, required: true }
});

transactionSchema.index({
  blockNumber: -1,
  transactionIndex: -1
});

transactionSchema.index({
  hash: 1
});

transactionSchema.index({
  from: 1
});

transactionSchema.index({
  to: 1
});

transactionSchema.index({
  value: -1
});

module.exports = mongoose.model('Transaction', transactionSchema);