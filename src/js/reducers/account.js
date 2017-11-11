import {
  FETCH_ACCOUNT
} from '../actions/account';

const initialState = null;

export default function account(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}