import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getVenues } from '../../utils/actions/venueActions';
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

    this.props.getVenues(payload);
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

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  getVenues: (payload) => dispatch(getVenues(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Search);;