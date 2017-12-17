import axios from 'axios';

export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';

export const fetchAccount = accountHash => {
  return (dispatch) => {
    return axios
      .get(`/api/account?hash=${ accountHash }`)
      .then(response => {
        fetchAccountSuccess(dispatch, response.data);
      })
      .catch(error => {

      });
  };
};

function fetchAccountSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_ACCOUNT_SUCCESS,
    payload
  });
}