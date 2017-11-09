import React from 'react';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import TextFieldSubmit from './TextFieldSubmit';
import AccountOverview from './AccountOverview';
import TransactionList from './TransactionList';

const Account = (props) => {
  return (
    <div className="account">
      <TextFieldSubmit
        onAccountSearch={props.onAccountSearch}
      />
      {
        props.account.balance ?
        <Grid container spacing={24}>
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={6}>
            <Paper className="paper">
              <AccountOverview
                balance={props.account.balance}
                transactionCount={props.account.transactionCount}
              />
              <Divider />
              <TransactionList
                transactions={props.account.transactions}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} sm={3}></Grid>
        </Grid> :
        <div></div>
      }
    </div>
  );
};

export default Account;