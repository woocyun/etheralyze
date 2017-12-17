import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const AppContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

export default AppContainer;