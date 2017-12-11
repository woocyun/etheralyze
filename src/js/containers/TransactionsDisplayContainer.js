import { connect } from 'react-redux';

import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToTransactionsDisplayProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToTransactionsDisplayProps = dispatch => ({
  fetchTransactions: page => {
    dispatch(fetchTransactions(page));
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToTransactionsDisplayProps,
  mapDispatchToTransactionsDisplayProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;