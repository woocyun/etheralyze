import {
  FETCH_BLOCKS
} from '../actions/BlockActions';

export const blocks = (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOCKS:
      return action.payload;
    default:
      return state;
  }
};