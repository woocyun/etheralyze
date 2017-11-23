import { combineReducers } from 'redux';
import account from './accounts';
import { blocks, blockPagination } from './blocks';
import { transactions, transactionPagination } from './transactions';

export default combineReducers({
  account,
  blocks,
  blockPagination,
  transactions,
  transactionPagination
});