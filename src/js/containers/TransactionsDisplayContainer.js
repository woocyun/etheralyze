import { connect } from 'react-redux';
import queryString from 'query-string';
import history from '../util/history';
import buildPath from '../util/url';
import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToTransactionsDisplayProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToTransactionsDisplayProps = dispatch => ({
  fetchTransactions: () => {
    dispatch(fetchTransactions(queryString.parse(location.search)));
  },
  changePage: page => {
    const queryParams = Object.assign({}, queryString.parse(location.search), { page });
    history.push(buildPath('/transactions', queryParams));
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToTransactionsDisplayProps,
  mapDispatchToTransactionsDisplayProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;