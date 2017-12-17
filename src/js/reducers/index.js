import { combineReducers } from 'redux';
import { account } from './accounts';
import { blocks, blockPagination, block } from './blocks';
import { transactions, transactionPagination, transaction } from './transactions';
import { overviewData } from './overview';

export default combineReducers({
  overviewData,
  account,
  blocks,
  blockPagination,
  block,
  transactions,
  transactionPagination,
  transaction
});