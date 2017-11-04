import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/lightBlue';
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';

import Header from './Header';

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
      </div>
    </MuiThemeProvider>
  );
};

export default App;