import { connect } from 'react-redux';

import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToAccountProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToAccountProps = dispatch => ({
  fetchTransactions: (page, qty) => {
    dispatch(fetchTransactions(page, qty));
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToAccountProps,
  mapDispatchToAccountProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;