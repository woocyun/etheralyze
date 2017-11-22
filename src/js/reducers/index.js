import { combineReducers } from 'redux';
import account from './accounts';
import { blocks, blockPagination } from './blocks';

export default combineReducers({
  account,
  blocks,
  blockPagination
});