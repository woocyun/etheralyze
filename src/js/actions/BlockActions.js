import axios from 'axios';

export const FETCH_BLOCKS = 'FETCH_BLOCKS';

export const fetchBlocks = () => {
  return (dispatch) => {
    return axios
      .get(`/api/blocks`)
      .then(response => {
        dispatch({
          type: FETCH_BLOCKS,
          payload: response.data
        });
      })
      .catch(error => {

      });
  };
};