import { connect } from 'react-redux';

import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToBlocksDisplayProps = (state) => ({
  blocks: state.blocks,
  blockPagination: state.blockPagination
});

const mapDispatchToBlocksDisplayProps = dispatch => ({
  fetchBlocks: page => {
    dispatch(fetchBlocks(page));
  }
});

const BlocksDisplayContainer = connect(
  mapStateToBlocksDisplayProps,
  mapDispatchToBlocksDisplayProps
)(BlocksDisplay);

export default BlocksDisplayContainer;