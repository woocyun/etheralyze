import { connect } from 'react-redux';

import { fetchBlocks } from '../actions/BlockActions';
import BlocksDisplay from '../components/BlocksDisplay';

const mapStateToAccountProps = (state) => ({
  blocks: state.blocks
});

const mapDispatchToAccountProps = dispatch => ({
  fetchBlocksOnMount: () => {
    dispatch(fetchBlocks());
  }
});

const BlocksDisplayContainer = connect(
  mapStateToAccountProps,
  mapDispatchToAccountProps
)(BlocksDisplay);

export default BlocksDisplayContainer;