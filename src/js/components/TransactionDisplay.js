import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TransactionInfo from './TransactionInfo';

class TransactionDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTransaction();
  }

  render() {
    return (
      <div className="transaction-display">
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                <TransactionInfo
                  transaction={this.props.transaction}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
      </div>
    );
  }
}

export default TransactionDisplay;