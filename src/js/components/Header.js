import React from 'react';
import {
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const Header = () => {
  return (
    <div className="header">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography type="headline" className="title">
            Etheralyze
          </Typography>
          <nav className="desktop-nav">
            <Link to="/blocks">
              <Button color="contrast">Blocks</Button>
            </Link>
            <Link to="/transactions">
              <Button color="contrast">Transactions</Button>
            </Link>
            {/* <Link to="/account">
              <Button color="contrast">Account</Button>
            </Link> */}
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;