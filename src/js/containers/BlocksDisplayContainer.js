import { connect } from 'react-redux';
import queryString from 'query-string';
import history from '../util/history';
import buildPath from '../util/url';
import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToBlocksDisplayProps = (state) => ({
  blocks: state.blocks,
  blockPagination: state.blockPagination
});

const mapDispatchToBlocksDisplayProps = dispatch => ({
  fetchBlocks: () => {
    dispatch(fetchBlocks(queryString.parse(location.search)));
  },
  changePage: page => {
    const queryParams = Object.assign({}, queryString.parse(location.search), { page });
    history.push(buildPath('/blocks', queryParams));
    dispatch(fetchBlocks(queryString.parse(location.search)));
  }
});

const BlocksDisplayContainer = connect(
  mapStateToBlocksDisplayProps,
  mapDispatchToBlocksDisplayProps
)(BlocksDisplay);

export default BlocksDisplayContainer;