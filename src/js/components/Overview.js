import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div className="overview">
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={10}>
            <Paper className="paper">
              Overview!
            </Paper>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item md={1}></Grid>
          <Grid item md={5}>
            <Paper className="paper">
              Recent Blocks
            </Paper>
          </Grid>
          <Grid item md={5}>
            <Paper className="paper">
              Recent Transactions
            </Paper>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Overview;