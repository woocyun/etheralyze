import {
  FETCH_ACCOUNT_SUCCESS
} from '../actions/AccountActions';

export const account = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};