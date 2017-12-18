import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AccountInfo from './AccountInfo';
import Loading from './Loading';

class AccountDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAccount()();
  }

  render() {
    return (
      <div className="account-display">
        {
          this.props.accountLoading ?
          <Loading /> :
          <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                <AccountInfo
                  account={this.props.account}
                  accountHash={this.props.accountHash}
                  fetchAccount={this.props.fetchAccount}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        }
      </div>
    );
  }
}

export default AccountDisplay;