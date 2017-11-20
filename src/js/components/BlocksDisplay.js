import React, { Component } from 'react';
import TextFieldSubmit from './TextFieldSubmit';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import BlockList from './BlockList';

class BlocksDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBlocksOnMount();
  }

  render() {
    return (
      <div className="blocks-display">
        <TextFieldSubmit
          label="Block Number"
          onSubmit={this.props.onAccountSearch}
        />
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                {/* <AccountOverview
                  address={props.account.address}
                  balance={props.account.balance}
                  transactionCount={props.account.transactionCount}
                />
                <Divider /> */}
                <BlockList
                  blocks={this.props.blocks}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
      </div>
    );
  }
}

export default BlocksDisplay;