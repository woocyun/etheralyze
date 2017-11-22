import {
  FETCH_BLOCKS_REQUESTED,
  FETCH_BLOCKS_RESOLVED,
  FETCH_BLOCKS_SUCCESS,
  FETCH_BLOCKS_ERROR
} from '../actions/BlockActions';

export const blocks = (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOCKS_SUCCESS:
      return action.payload.blocks;
    default:
      return state;
  }
};

export const blockPagination = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOCKS_SUCCESS:
      return action.payload.pagination;
    default:
      return state;
  }
};