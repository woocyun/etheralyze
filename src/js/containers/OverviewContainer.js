import { connect } from 'react-redux';
import Overview from '../components/Overview';

import { fetchOverviewData } from '../actions/OverviewActions';

const mapStateToProps = (state) => ({
  overviewData: state.overviewData
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(fetchOverviewData());
  }
});

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverviewContainer;