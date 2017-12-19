import {
  FETCH_TRANSACTIONS_REQUESTED,
  FETCH_TRANSACTIONS_RESOLVED,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_ERROR,
  FETCH_TRANSACTION_SUCCESS
} from '../actions/TransactionActions';

export const transactions = (state = [], action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_SUCCESS:
      return action.payload.transactions;
    case FETCH_TRANSACTIONS_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const transactionsLoading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUESTED:
      return true;
    case FETCH_TRANSACTIONS_RESOLVED:
      return false;
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

export const transaction = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};