import { connect } from 'react-redux';
import BlockDisplay from '../components/BlockDisplay';

const mapStateToBlockDisplayProps = (state, ownProps) => ({
  blockNumber: ownProps.match.params.number
});

const mapDispatchToBlockDisplayProps = dispatch => ({
  
});

const BlockDisplayContainer = connect(
  mapStateToBlockDisplayProps,
  mapDispatchToBlockDisplayProps
)(BlockDisplay);

export default BlockDisplayContainer;