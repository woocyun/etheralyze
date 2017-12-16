import {
  FETCH_OVERVIEW_DATA_REQUESTED,
  FETCH_OVERVIEW_DATA_RESOLVED,
  FETCH_OVERVIEW_DATA_SUCCESS,
  FETCH_OVERVIEW_DATA_ERROR
} from '../actions/OverviewActions';

export const overviewData = (state = { priceData: {}, latestBlocks: [], latestTransactions: [] }, action) => {
  switch (action.type) {
    case FETCH_OVERVIEW_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};