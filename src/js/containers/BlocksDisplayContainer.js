import { connect } from 'react-redux';
import queryString from 'query-string';
import history from '../util/history';
import buildPath from '../util/url';
import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToBlocksDisplayProps = (state, ownProps) => {
  return {
    blocks: state.blocks,
    blockPagination: state.blockPagination,
    history: ownProps.history
  }
};

const mapDispatchToBlocksDisplayProps = dispatch => ({
  fetchBlocks: () => {
    dispatch(fetchBlocks(queryString.parse(location.search)));
  },
  changePage: page => {
    const queryParams = Object.assign({}, queryString.parse(location.search), { page });
    history.push(buildPath('/blocks', queryParams));
    dispatch(fetchBlocks(queryString.parse(location.search)));
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, dispatchProps, {
    onBlockSearch: blockNumber => {
      stateProps.history.push(`/block/${ blockNumber }`);
      // dispatchProps.dispatch(fetchTransaction(stateProps.transactionHash));
    }
  });
};

const BlocksDisplayContainer = connect(
  mapStateToBlocksDisplayProps,
  mapDispatchToBlocksDisplayProps,
  mergeProps
)(BlocksDisplay);

export default BlocksDisplayContainer;