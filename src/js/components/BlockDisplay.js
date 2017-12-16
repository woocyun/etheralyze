import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import BlockInfo from './BlockInfo';

class BlockDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.fetchBlock();
  }

  render() {
    return (
      <div className="block-display">
        <Grid container spacing={24}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Paper className="paper">
                <BlockInfo
                  block={this.props.block}
                  blockNumber={this.props.blockNumber}
                />
              </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
      </div>
    );
  }
}

export default BlockDisplay;