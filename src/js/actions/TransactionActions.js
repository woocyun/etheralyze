import axios from 'axios';

export const FETCH_TRANSACTIONS_REQUESTED = 'FETCH_TRANSACTIONS_REQUESTED';
export const FETCH_TRANSACTIONS_RESOLVED = 'FETCH_TRANSACTIONS_RESOLVED';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR';

export const fetchTransactions = queryParams => {
  return (dispatch) => {
    fetchTransactionsRequested(dispatch);

    const fetchUrl = Object.keys(queryParams)
      .map(key => ({ key, val: queryParams[key] }))
      .reduce((prev, curr, idx) => {
        if (idx === 0) {
          return prev + `?${ curr.key }=${ curr.val }`;
        } else {
          return prev + `&${ curr.key }=${ curr.val }`;
        }
      }, '/api/transactions');

    return axios
      .get(fetchUrl)
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