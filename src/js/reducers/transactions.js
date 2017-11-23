import {
  FETCH_TRANSACTIONS_REQUESTED,
  FETCH_TRANSACTIONS_RESOLVED,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_ERROR
} from '../actions/TransactionActions';

export const transactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return action.payload.transactions;
    default:
      return state;
  }
};

export const transactionPagination = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return action.payload.pagination;
    default:
      return state;
  }
};