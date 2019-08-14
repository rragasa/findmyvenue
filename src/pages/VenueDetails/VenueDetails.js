import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { fetchVenueDetails } from '../../utils/actions/appActions';

import {
  apiVersion as v,
  clientId,
  clientSecret,
} from '../../config.json';

class VenueDetails extends Component {
  constructor(props) {
    super(props);
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

    const payload = {
      v,
      client_id: clientId,
      client_secret: clientSecret,
    };
    getVenueDetails(id, payload);
  }

  render() {
    const { venue } = this.props;
    return (
      <Container maxWidth="md">
        <Box>{venue.name}</Box>
      </Container>
    );
  }
}

VenueDetails.defaultProps = {
  venue: {},
};

VenueDetails.propTypes = {
  venue: object,
  getVenueDetails: func,
  match: object,
};

const mapStateToProps = ({
  application: {
    venues,
    venue,
  },
}) => ({
  venues,
  venue,
});

const mapDispatchToProps = (dispatch) => ({
  getVenueDetails: (id, payload) => dispatch(fetchVenueDetails(id, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueDetails);
