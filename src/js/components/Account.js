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
        onSubmit={props.onAccountSearch}
      />
      {
        props.account ?
        <Grid container spacing={24}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Paper className="paper">
              <AccountOverview
                address={props.account.address}
                balance={props.account.balance}
                transactionCount={props.account.transactionCount}
              />
              <Divider />
              <TransactionList
                transactions={props.account.transactions}
              />
            </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid> :
        <div></div>
      }
    </div>
  );
};

export default Account;