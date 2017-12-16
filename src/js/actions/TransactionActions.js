import axios from 'axios';
import buildPath from '../util/url';

export const FETCH_TRANSACTIONS_REQUESTED = 'FETCH_TRANSACTIONS_REQUESTED';
export const FETCH_TRANSACTIONS_RESOLVED = 'FETCH_TRANSACTIONS_RESOLVED';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR';
export const FETCH_TRANSACTION_SUCCESS = 'FETCH_TRANSACTION_SUCCESS';

export const fetchTransactions = queryParams => {
  return (dispatch) => {
    fetchTransactionsRequested(dispatch);

    return axios
      .get(buildPath('/api/transactions', queryParams))
      .then(response => {
        fetchTransactionsResolved(dispatch);
        fetchTransactionsSuccess(dispatch, response.data);
      })
      .catch(error => {
        fetchTransactionsResolved(dispatch);
        fetchTransactionsError(dispatch, error);
      });
  };
};

export const fetchTransaction = transactionHash => {
  return (dispatch) => {
    return axios
      .get(`/api/transaction?hash=${ transactionHash }`)
      .then(response => {
        fetchTransactionSuccess(dispatch, response.data);
      })
      .catch(error => {
        // fetchBlocksResolved(dispatch);
        // fetchBlocksError(dispatch, error);
      });
  };
};

function fetchTransactionsRequested(dispatch) {
  dispatch({
    type: FETCH_TRANSACTIONS_REQUESTED
  });
}

function fetchTransactionsResolved(dispatch) {
  dispatch({
    type: FETCH_TRANSACTIONS_RESOLVED,
  });
}

function fetchTransactionsSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_TRANSACTIONS_SUCCESS,
    payload
  });
}

function fetchTransactionsError(dispatch, payload) {
  dispatch({
    type: FETCH_TRANSACTIONS_ERROR,
    payload
  });
}

function fetchTransactionSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_TRANSACTION_SUCCESS,
    payload
  });
}