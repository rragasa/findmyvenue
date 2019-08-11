import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state.location);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    const {location} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="venueSearch"
          label="Search for venues"
          type="text"
          margin="normal"
          value={location}
          onChange={e => this.handleChange(e)}
        />
        <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
      </form>
    );
  }
}

export default Search;