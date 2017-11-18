import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App';

const mapStateToAppProps = (state) => ({

});

const mapDispatchToAppProps = (dispatch) => ({

});

const AppContainer = withRouter(
  connect(
    mapStateToAppProps,
    mapDispatchToAppProps
  )(App)
);

export default AppContainer;