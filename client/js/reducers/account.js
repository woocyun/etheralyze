import {
  FETCH_ACCOUNT
} from '../actions/account';

const initialState = {};

export default function account(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return state;
    default:
      return state;
  }
}