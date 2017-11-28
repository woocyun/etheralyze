import { combineReducers } from 'redux';
import account from './accounts';
import { blocks, blockPagination, block } from './blocks';
import { transactions, transactionPagination } from './transactions';

export default combineReducers({
  account,
  blocks,
  blockPagination,
  block,
  transactions,
  transactionPagination
});