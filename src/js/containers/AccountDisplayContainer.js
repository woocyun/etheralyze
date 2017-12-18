import { connect } from 'react-redux';
import { fetchAccount } from '../actions/AccountActions';
import AccountDisplay from '../components/AccountDisplay';

const mapStateToProps = (state, ownProps) => ({
  account: state.account,
  accountHash: ownProps.match.params.hash,
  accountLoading: state.accountLoading
});

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, dispatchProps, {
    fetchAccount: accountHash => () => {
      dispatchProps.dispatch(fetchAccount(accountHash || stateProps.accountHash));
    }
  });
};

const AccountDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AccountDisplay);

export default AccountDisplayContainer;