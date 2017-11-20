import { combineReducers } from 'redux';
import account from './accounts';
import { blocks } from './blocks';

export default combineReducers({
  account,
  blocks
});