import React from 'react';
import Web3 from 'web3';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const web3 = new Web3();

const AccountOverview = props => {
  return (
    <div className="account-overview">
      <div className="overview-field">
        <Typography type="body2">
          Address:
        </Typography>
        <Typography className="val" type="body1">
          {props.address}
        </Typography>
      </div>
      <div className="overview-field">
        <Typography type="body2">
          Balance:
        </Typography>
        <Typography className="val" type="body1">
          {web3.fromWei(props.balance, 'ether')} Ether
        </Typography>
      </div>
      <div className="overview-field">
        <Typography type="body2">
          No. of Transactions:
        </Typography>
        <Typography className="val" type="body1">
          {props.transactionCount}
        </Typography>
    </div>
    </div>
  );
};

export default AccountOverview;