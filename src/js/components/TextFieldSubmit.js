import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TextFieldSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.address);
  }

  render() {
    return (
      <div className="text-field-submit">
        <Grid container spacing={24}>
          <Grid item xs={1} sm={3}></Grid>
          <Grid item xs={10} sm={6}>
            <TextField
              label={this.props.label}
              value={this.state.address}
              onChange={this.handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={1} sm={3}></Grid>
        </Grid>
        <div style={{textAlign: 'center'}}>
          <Button
            className="submit-button"
            color="primary"
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default TextFieldSubmit;