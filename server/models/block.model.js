const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blockSchema = mongoose.Schema({
  number: { type: Number, required: true, index: true, unique: true },
  difficulty: { type: String, required: true },
  extraData: { type: String, required: true },
  gasLimit: { type: Number, required: true },
  gasUsed: { type: Number, required: true, index: true },
  hash: { type: String, required: true, index: true, unique: true },
  // logsBloom: { type: String, required: true },
  miner: { type: String, required: true, index: true },
  // mixHash: { type: String, required: true },
  nonce: { type: String, required: true },
  parentHash: { type: String, required: true },
  // receiptsRoot: { type: String, required: true },
  sha3Uncles: { type: String, required: true },
  size: { type: Number, required: true },
  // stateRoot: { type: String, required: true },
  timestamp: { type: Number, required: true },
  totalDifficulty: { type: String, required: true },
  transactions: { type: [String] },
  // transactionsRoot: { type: String, required: true },
  uncles: { type: [String] }
});

module.exports = mongoose.model('Block', blockSchema);