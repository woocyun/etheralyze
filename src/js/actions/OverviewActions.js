import axios from 'axios';

export const FETCH_OVERVIEW_DATA_REQUESTED = 'FETCH_OVERVIEW_DATA_REQUESTED';
export const FETCH_OVERVIEW_DATA_RESOLVED = 'FETCH_OVERVIEW_DATA_RESOLVED';
export const FETCH_OVERVIEW_DATA_SUCCESS = 'FETCH_OVERVIEW_DATA_SUCCESS';
export const FETCH_OVERVIEW_DATA_ERROR = 'FETCH_OVERVIEW_DATA_ERROR';

export const fetchOverviewData = () => {
  return dispatch => {
    fetchOverviewDataRequested(dispatch);

    return axios
      .get(`/api/overview`)
      .then(response => {
        fetchOverviewDataResolved(dispatch);
        fetchOverviewDataSuccess(dispatch, response.data);
      })
      .catch(err => {
        fetchOverviewDataError(dispatch, err);
      });
  };
};

function fetchOverviewDataRequested(dispatch) {
  dispatch({
    type: FETCH_OVERVIEW_DATA_REQUESTED
  });
}

function fetchOverviewDataResolved(dispatch) {
  dispatch({
    type: FETCH_OVERVIEW_DATA_RESOLVED,
  });
}

function fetchOverviewDataSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_OVERVIEW_DATA_SUCCESS,
    payload
  });
}

function fetchOverviewDataError(dispatch, payload) {
  dispatch({
    type: FETCH_OVERVIEW_DATA_ERROR,
    payload
  });
}