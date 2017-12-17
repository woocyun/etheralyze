import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TextFieldSubmit from './TextFieldSubmit';
import AccountOverview from './AccountOverview';
import Notification from './Notification';

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
              <AccountOverview
                address={props.account.address}
                balance={props.account.balance}
                transactionCount={props.account.transactionCount}
              />
              <Divider />
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