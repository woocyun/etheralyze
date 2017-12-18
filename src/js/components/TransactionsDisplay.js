import React, { Component } from 'react';
import TextFieldSubmit from './TextFieldSubmit';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TransactionList from './TransactionList';

class TransactionsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return (
      <div className="blocks-display">
        <TextFieldSubmit
          label="Transaction Hash"
          onSubmit={this.props.onTransactionSearch}
          type="text"
        />
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                <TransactionList
                  transactionPagination={this.props.transactionPagination}
                  transactions={this.props.transactions}
                  changePage={this.props.changePage}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
      </div>
    );
  }
}

export default TransactionsDisplay;