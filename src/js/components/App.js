import React from 'react';
import {
  Route
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';

import Header from './Header';
import AccountContainer from '../containers/AccountContainer';
import BlocksDisplayContainer from '../containers/BlocksDisplayContainer';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: cyan,
    error: red
  }
});

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div id="etheralyze">
        <Header />
        <Route path="/account" component={AccountContainer} />
        <Route path="/blocks" component={BlocksDisplayContainer} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;