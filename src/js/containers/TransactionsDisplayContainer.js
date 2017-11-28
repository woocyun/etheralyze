import { connect } from 'react-redux';

import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToTransactionsDisplayProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToTransactionsDisplayProps = dispatch => ({
  fetchTransactions: (page, qty) => {
    dispatch(fetchTransactions(page, qty));
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToTransactionsDisplayProps,
  mapDispatchToTransactionsDisplayProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;