import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { fetchVenueDetails } from '../../utils/actions/appActions';
import {
  apiVersion as v,
  client_id,
  client_secret,
} from '../../config.json';

class VenueDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVenueInformation: {},
    };
    this.getSelectedVenue = this.getSelectedVenue.bind(this);
  }
  componentDidMount() {
    this.getSelectedVenue();
  }

  getSelectedVenue() {
    const {
      match: {
        params: {
          id,
        },
      },
      getVenueDetails,
    } = this.props;

    const payload = { v, client_id, client_secret };
    getVenueDetails(id, payload);
  }

  render() {
    const { venue } = this.props;
    return(
      <div>{venue.name}</div>
    );
  }
}

VenueDetails.defaultProps = {
  venue: {},
}

VenueDetails.propTypes = {
  venue: object.isRequired,
}

const mapStateToProps = ({
  application: {
    venues,
    venue,
  },
}) => ({
  venues,
  venue,
});

const mapDispatchToProps = dispatch => ({
  getVenueDetails: (id, payload) => dispatch(fetchVenueDetails(id, payload)),
 })


export default connect(mapStateToProps, mapDispatchToProps)(VenueDetails);