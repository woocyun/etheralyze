import React, { Component } from 'react';
import TextFieldSubmit from './TextFieldSubmit';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

class AccountsDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blocks-display">
        <TextFieldSubmit
          label="Account Hash"
          onSubmit={this.props.onAccountSearch}
          type="text"
        />
      </div>
    );
  }
}

export default AccountsDisplay;