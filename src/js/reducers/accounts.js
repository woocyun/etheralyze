import {
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_REQUESTED,
  FETCH_ACCOUNT_RESOLVED,
  FETCH_ACCOUNT_ERROR
} from '../actions/AccountActions';

export const account = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_SUCCESS:
    case FETCH_ACCOUNT_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const accountLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_REQUESTED:
      return true;
    case FETCH_ACCOUNT_RESOLVED:
      return false;
    default:
      return state;
  }
}