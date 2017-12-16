import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import OverviewSummary from './OverviewSummary';
import OverviewBlocks from './OverviewBlocks';
import OverviewTransactions from './OverviewTransactions';
import Hidden from 'material-ui/Hidden';

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
        <Grid container style={{ marginBottom: 13 }}>
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={6}>
            <Paper className="paper">
              <OverviewSummary
                priceData={this.props.overviewData.priceData}
              />
            </Paper>
          </Grid>
          <Grid item xs={1} md={3}></Grid>
        </Grid>
        <Grid container spacing={24} justify="center">
          <Grid item xs={1} md={3}></Grid>
          <Grid item xs={10} md={3}>
            <Paper className="paper">
              <OverviewBlocks
                blocks={this.props.overviewData.latestBlocks}
              />
            </Paper>
          </Grid>
          <Hidden smUp>
            <Grid item xs={1}></Grid>
          </Hidden>
          <Grid item xs={10} md={3}>
            <Paper className="paper">
              <OverviewTransactions
                transactions={this.props.overviewData.latestTransactions}
              />
            </Paper>
          </Grid>
          <Hidden smDown>
            <Grid item md={3}></Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}

export default Overview;