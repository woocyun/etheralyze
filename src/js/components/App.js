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
import AccountDisplayContainer from '../containers/AccountDisplayContainer';
import AccountsDisplayContainer from '../containers/AccountsDisplayContainer';
import BlocksDisplayContainer from '../containers/BlocksDisplayContainer';
import BlockDisplayContainer from '../containers/BlockDisplayContainer';
import TransactionsDisplayContainer from '../containers/TransactionsDisplayContainer';
import TransactionDisplayContainer from '../containers/TransactionDisplayContainer';

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
        <Route path="/accounts" component={AccountsDisplayContainer} />
        <Route path="/account/:hash" component={AccountDisplayContainer} />
        <Route path="/blocks" component={BlocksDisplayContainer} />
        <Route path="/block/:number" component={BlockDisplayContainer} />
        <Route path="/transactions" component={TransactionsDisplayContainer} />
        <Route path="/transaction/:hash" component={TransactionDisplayContainer} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;