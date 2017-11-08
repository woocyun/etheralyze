import axios from 'axios';

export const FETCH_ACCOUNT = 'FETCH_ACCOUNT';

export const fetchAccount = account => {
  return (dispatch) => {
    

    return axios
      .get(`/api/account/${ account }`)
      .then(response => {
        dispatch({
          type: FETCH_ACCOUNT,
          payload: response.data
        });
      })
      .catch(error => {

      });
  };
};