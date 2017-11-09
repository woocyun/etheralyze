import React from 'react';
import Web3 from 'web3';

import Typography from 'material-ui/Typography';

const web3 = new Web3();

const AccountOverview = props => {
  return (
    <div>
      <div className="overview">
        <div className="overview-field">
          <Typography type="body2">
            Balance:
          </Typography>
          <Typography type="body1">
            {web3.fromWei(props.balance, 'ether')} Ether
          </Typography>
        </div>
        <div className="overview-field">
          <Typography type="body2">
            No. of Transactions:
          </Typography>
          <Typography type="body1">
            {props.transactionCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AccountOverview;