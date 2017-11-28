import axios from 'axios';

export const FETCH_BLOCKS_REQUESTED = 'FETCH_BLOCKS_REQUESTED';
export const FETCH_BLOCKS_RESOLVED = 'FETCH_BLOCKS_RESOLVED';
export const FETCH_BLOCKS_SUCCESS = 'FETCH_BLOCKS_SUCCESS';
export const FETCH_BLOCKS_ERROR = 'FETCH_BLOCKS_ERROR';
export const FETCH_BLOCK_SUCCESS = 'FETCH_BLOCK_SUCCESS';

export const fetchBlocks = (page = 1, qty = 10) => {
  return (dispatch) => {
    fetchBlocksRequested(dispatch);

    return axios
      .get(`/api/blocks?page=${ page }&qty=${ qty }`)
      .then(response => {
        fetchBlocksResolved(dispatch);
        fetchBlocksSuccess(dispatch, response.data);
      })
      .catch(error => {
        fetchBlocksResolved(dispatch);
        fetchBlocksError(dispatch, error);
      });
  };
};

export const fetchBlock = (blockNumber) => {
  return (dispatch) => {
    return axios
      .get(`/api/block?number=${ blockNumber }`)
      .then(response => {
        // fetchBlocksResolved(dispatch);
        fetchBlockSuccess(dispatch, response.data);
      })
      .catch(error => {
        // fetchBlocksResolved(dispatch);
        // fetchBlocksError(dispatch, error);
      });
  };
};

function fetchBlocksRequested(dispatch) {
  dispatch({
    type: FETCH_BLOCKS_REQUESTED
  });
}

function fetchBlocksResolved(dispatch) {
  dispatch({
    type: FETCH_BLOCKS_RESOLVED,
  });
}

function fetchBlocksSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_BLOCKS_SUCCESS,
    payload
  });
}

function fetchBlocksError(dispatch, payload) {
  dispatch({
    type: FETCH_BLOCKS_ERROR,
    payload
  });
}

function fetchBlockSuccess(dispatch, payload) {
  dispatch({
    type: FETCH_BLOCK_SUCCESS,
    payload
  });
}