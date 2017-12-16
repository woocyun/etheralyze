import { connect } from 'react-redux';
import { fetchTransaction } from '../actions/TransactionActions';
import TransactionDisplay from '../components/TransactionDisplay';

const mapStateToProps = (state, ownProps) => ({
  transaction: state.transaction,
  transactionHash: ownProps.match.params.hash
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, dispatchProps, {
    fetchTransaction: () => {
      dispatchProps.dispatch(fetchTransaction(stateProps.transactionHash));
    }
  });
};

const TransactionDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TransactionDisplay);

export default TransactionDisplayContainer;