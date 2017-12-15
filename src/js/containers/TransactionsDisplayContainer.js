import { connect } from 'react-redux';
import history from '../util/history';
import { fetchTransactions } from '../actions/TransactionActions';
import TransactionsDisplay from '../components/TransactionsDisplay';

const mapStateToTransactionsDisplayProps = (state) => ({
  transactions: state.transactions,
  transactionPagination: state.transactionPagination
});

const mapDispatchToTransactionsDisplayProps = dispatch => ({
  fetchTransactions: page => {
    dispatch(fetchTransactions(page));
  },
  changePage: page => {
    history.push(`/transactions&page=${ page }`);
  }
});

const TransactionsDisplayContainer = connect(
  mapStateToTransactionsDisplayProps,
  mapDispatchToTransactionsDisplayProps
)(TransactionsDisplay);

export default TransactionsDisplayContainer;