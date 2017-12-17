import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AccountInfo from './AccountInfo';

class AccountDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('fetching account');
    this.props.fetchAccount();
  }

  render() {
    return (
      <div className="account-display">
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                <AccountInfo
                  account={this.props.account}
                  accountHash={this.props.accountHash}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
      </div>
    );
  }
}

export default AccountDisplay;