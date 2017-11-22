import { connect } from 'react-redux';

import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToAccountProps = (state) => ({
  blocks: state.blocks,
  blockPagination: state.blockPagination
});

const mapDispatchToAccountProps = dispatch => ({
  fetchBlocks: (page, qty) => {
    dispatch(fetchBlocks(page, qty));
  }
});

const BlocksDisplayContainer = connect(
  mapStateToAccountProps,
  mapDispatchToAccountProps
)(BlocksDisplay);

export default BlocksDisplayContainer;