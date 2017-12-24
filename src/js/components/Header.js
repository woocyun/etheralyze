import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavAnchor: null
    };

    this.handleMobileNavOpen = this.handleMobileNavOpen.bind(this);
    this.handleMobileNavClose = this.handleMobileNavClose.bind(this);
  }

  handleMobileNavOpen(event) {
    this.setState({ mobileNavAnchor: event.currentTarget });
  }

  handleMobileNavClose(event) {
    this.setState({ mobileNavAnchor: null });
  }

  render() {
    const links = [
      { location: '/', name: 'Overview'},
      { location: '/blocks', name: 'Blocks'},
      { location: '/transactions', name: 'Transactions'},
      // { location: '/accounts', name: 'Accounts'}
    ]
    return (
      <div className="header">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="headline" className="title">
              Etheralyze
            </Typography>
            <nav className="desktop-nav">
              {
                links.map((link, idx) => (
                  <Link key={idx} to={link.location}>
                    <Button color="accent">{link.name}</Button>
                  </Link>
                ))
              }
            </nav>
            <div className="mobile-nav">
              <IconButton
                onClick={this.handleMobileNavOpen}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={this.state.mobileNavAnchor}
                open={!!this.state.mobileNavAnchor}
                onRequestClose={this.handleMobileNavClose}
                PaperProps={{
                  style: {
                    width: 200
                  }
                }}
              >
                {
                  links.map((link, idx) => (
                    <MenuItem
                      id="mobile-nav__dropdownitem"
                      key={idx}
                      onClick={this.handleMobileNavClose}
                    >
                      <Link to={link.location}>
                        {link.name}
                      </Link>
                    </MenuItem>
                  ))
                }
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;