import { connect } from 'react-redux';
import { fetchBlock } from '../actions/BlockActions';
import BlockDisplay from '../components/BlockDisplay';

const mapStateToProps = (state, ownProps) => ({
  block: state.block,
  blockNumber: ownProps.match.params.number
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, dispatchProps, {
    fetchBlock: () => {
      dispatchProps.dispatch(fetchBlock(stateProps.blockNumber));
    }
  });
};

const BlockDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BlockDisplay);

export default BlockDisplayContainer;