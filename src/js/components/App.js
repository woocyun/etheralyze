import React from 'react';
import {
  Route
} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';

import Header from './Header';
import OverviewContainer from '../containers/OverviewContainer';
import AccountContainer from '../containers/AccountContainer';
import BlocksDisplayContainer from '../containers/BlocksDisplayContainer';
import BlockDisplayContainer from '../containers/BlockDisplayContainer';
import TransactionsDisplayContainer from '../containers/TransactionsDisplayContainer';

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
        <Route exact path="/" component={OverviewContainer} />
        <Route path="/account" component={AccountContainer} />
        <Route path="/blocks" component={BlocksDisplayContainer} />
        <Route path="/block/:number" component={BlockDisplayContainer} />
        <Route path="/transactions" component={TransactionsDisplayContainer} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;