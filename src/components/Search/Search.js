import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { searchVenue } from '../../utils/api/searchVenue';
import {
  apiVersion as v,
  client_id,
  client_secret,
} from '../../config.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({location: event.target.value});
  }

  handleSubmit(event){
    const payload = {
      v,
      client_id,
      client_secret,
      near: this.state.location,
    };
    searchVenue(payload).then(async response => {
      this.setState({
        venues: response.data.response.venues
      });
      console.log('search', response.data.response);
    })
    .catch(error => {
      console.log('ERROR: ' + error);
    });
  }
  render() {
    return (
      <form role="search">
        <TextField
          id="venue-search"
          label="Enter a location"
          type="text"
          margin="normal"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <Button variant="contained" onClick={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

export default Search;