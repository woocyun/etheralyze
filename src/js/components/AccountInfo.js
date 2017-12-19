import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import TextFieldSubmit from './TextFieldSubmit';
import AccountInfoOverview from './AccountInfoOverview';
import Notification from './Notification';
import TransactionList from './TransactionList';
import Button from 'material-ui/Button';
import {
  Link
} from 'react-router-dom';

const Account = (props) => {
  const {
    account,
    accountHash
  } = props;

  return (
    <div className="account-info">
      {
        props.account instanceof Error || !props.account ?
        <Notification
          color="red"
          message={`Account ${ accountHash } does not exist.`}
        /> :
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
                header={
                  <div>
                    Recent Transactions
                    {/* <Link style={{ marginLeft: 10 }} to={`/transactions?account=${accountHash}`}>
                      <Button color="primary">View All</Button>
                    </Link> */}
                  </div>
                }
                transactions={props.account.transactions}
                onAccountClick={props.fetchAccount}
              />
            </Paper>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      }
    </div>
  );
};

export default Account;