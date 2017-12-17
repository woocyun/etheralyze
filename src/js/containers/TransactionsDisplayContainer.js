import { connect } from 'react-redux';
import queryString from 'query-string';
import history from '../util/history';
import buildPath from '../util/url';
import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => {
    dispatch(fetchTransactions(queryString.parse(location.search)));
  },
  changePage: page => {
    const queryParams = Object.assign({}, queryString.parse(location.search), { page });
    history.push(buildPath('/transactions', queryParams));
    dispatch(fetchTransactions(queryString.parse(location.search)));
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;