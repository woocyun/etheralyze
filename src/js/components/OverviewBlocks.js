import React from 'react';
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

const OverviewBlocks = props => {
  const {
    blocks = []
  } = props;

  return (
    <div>
      <List
        subheader={<ListSubheader>Recent Blocks</ListSubheader>}
      >
        {
          blocks.map(block => (
            <Link
              key={block.hash}
              to={`/block/${ block.number }`}
            >
              <ListItem
                button
              >
                <ListItemText
                  primary={`Block ${ block.number }`}
                  secondary={`${ block.transactions.length } Transactions. Mined by ${ block.miner.slice(0, 20) }...`}
                />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </div>
  );
};

export default OverviewBlocks;