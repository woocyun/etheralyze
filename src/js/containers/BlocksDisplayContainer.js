import { connect } from 'react-redux';

import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToBlocksDisplayProps = (state) => ({
  blocks: state.blocks,
  blockPagination: state.blockPagination
});

const mapDispatchToBlocksDisplayProps = dispatch => ({
  fetchBlocks: (page, qty) => {
    dispatch(fetchBlocks(page, qty));
  }
});

const BlocksDisplayContainer = connect(
  mapStateToBlocksDisplayProps,
  mapDispatchToBlocksDisplayProps
)(BlocksDisplay);

export default BlocksDisplayContainer;