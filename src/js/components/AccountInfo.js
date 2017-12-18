import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TextFieldSubmit from './TextFieldSubmit';
import AccountInfoOverview from './AccountInfoOverview';
import Notification from './Notification';
import TransactionList from './TransactionList';

const Account = (props) => {
  const {
    account,
    accountHash
  } = props;

  return (
    <div className="account-info">
      {
        account ?
        <Grid container spacing={24}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Paper className="paper">
              <AccountInfoOverview
                accountHash={props.account.accountHash}
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
        <Notification
          color="red"
          message={`Account ${ accountHash } does not exist.`}
        />
      }
    </div>
  );
};

export default Account;