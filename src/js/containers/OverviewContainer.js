import { connect } from 'react-redux';
import Overview from '../components/Overview';

import { fetchOverviewData } from '../actions/OverviewActions';

const mapStateToAppProps = (state) => ({
  overviewData: state.overviewData
});

const mapDispatchToAppProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchOverviewData());
  }
});

const OverviewContainer = connect(
  mapStateToAppProps,
  mapDispatchToAppProps
)(Overview);

export default OverviewContainer;