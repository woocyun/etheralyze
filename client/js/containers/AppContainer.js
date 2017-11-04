import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToAppProps = (state) => ({

});

const mapDispatchToAppProps = (dispatch) => ({

});

const AppContainer = connect(
  mapStateToAppProps,
  mapDispatchToAppProps
)(App);

export default AppContainer;