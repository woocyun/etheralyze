import React from 'react';
import Web3 from 'web3';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import {
  Link
} from 'react-router-dom';

const web3 = new Web3();

const OverviewTransactions = props => {
  const {
    transactions = []
  } = props;

  return (
    <div>
      <List
        subheader={<ListSubheader>Recent Transactions</ListSubheader>}
      >
        {
          transactions.map(transaction => (
            <Link to={`/transaction/${ transaction.hash }`}>
              <ListItem
                button
                key={transaction.hash}
              >
                <ListItemText
                  primary={`Transaction ${ transaction.hash.slice(0, 20) }...`}
                  secondary={`Value: ${ web3.fromWei(transaction.value, 'ether') } ether`}
                />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </div>
  );
};

export default OverviewTransactions;