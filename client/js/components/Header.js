import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="headline" className="title">
            Etheralyze
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;