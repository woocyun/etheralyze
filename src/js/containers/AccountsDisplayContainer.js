import { connect } from 'react-redux';
import queryString from 'query-string';
import history from '../util/history';
import buildPath from '../util/url';
import { fetchAccountInfo } from '../actions/AccountActions';
import AccountsDisplay from '../components/AccountsDisplay';

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps) => {
  return Object.assign({}, stateProps, dispatchProps, {
    onAccountSearch: accountHash => {
      stateProps.history.push(`/account/${ accountHash }`);
    }
  });
};

const AccountsDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AccountsDisplay);

export default AccountsDisplayContainer;