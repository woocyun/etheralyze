import axios from 'axios';

export const FETCH_ACCOUNT_REQUESTED = 'FETCH_ACCOUNT_REQUESTED';
export const FETCH_ACCOUNT_RESOLVED = 'FETCH_ACCOUNT_RESOLVED';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_ERROR = 'FETCH_ACCOUNT_ERROR';

const CancelToken = axios.CancelToken;
let cancelFetchAccount;

export const fetchAccount = accountHash => {
  if (typeof cancelFetchAccount === 'function') cancelFetchAccount();

  return (dispatch) => {
    fetchAccountRequested(dispatch);

    return axios({
      url: `/api/account?hash=${ accountHash }`,
      method: 'get',
      cancelToken: new CancelToken(c => {
        cancelFetchAccount = c;
      })
    })
      .then(response => {
        fetchAccountSuccess(dispatch, response.data);
        fetchAccountResolved(dispatch);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('cancelled fetchAccount');
        } else {
          fetchAccountError(dispatch, error);
          fetchAccountResolved(dispatch);
        }
      });
  };
};

function fetchAccountRequested(dispatch) {
  dispatch({
    type: FETCH_ACCOUNT_REQUESTED
  });
}

function fetchAccountResolved(dispatch) {
  dispatch({
    type: FETCH_ACCOUNT_RESOLVED
  });
}

function fetchAccountSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_ACCOUNT_SUCCESS,
    payload
  });
}

function fetchAccountError(dispatch, payload) {
  dispatch({
    type: FETCH_ACCOUNT_ERROR,
    payload
  });
}