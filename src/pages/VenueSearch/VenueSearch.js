import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenues, fetchVenueDetails } from '../../utils/actions/appActions';
import SearchBox from '../../components/SearchBox';
import VenuesList from '../../components/VenuesList';
import {
  apiVersion as v,
  client_id,
  client_secret,
} from '../../config.json';

class VenueSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectVenue = this.selectVenue.bind(this);
  }

  handleSubmit(location) {
    const { getVenues } = this.props;
    const payload = {
      v,
      client_id,
      client_secret,
      near: location,
    };

    getVenues(payload);
  }

  selectVenue(selectedVenue) {
    const { getVenueDetails } = this.props;
    const payload = {
      v,
      client_id,
      client_secret,
    };

    getVenueDetails(selectedVenue, payload);
  }

  render(){
    const { venues = [] } = this.props;

    return(
      <section id="venueSearch">
        <SearchBox
          onSubmit={(location) => this.handleSubmit(location)}
        />
        { venues.length > 0 && (
          <VenuesList
            venues={venues}
            selectVenue={(selectedVenue) => this.selectVenue(selectedVenue)}
          />
        )}
      </section>
    );
  }
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

const mapDispatchToProps = dispatch => ({
  getVenues: (payload) => dispatch(fetchVenues(payload)),
  getVenueDetails: (id, payload) => dispatch(fetchVenueDetails(id, payload)),
 })

 export default connect(mapStateToProps, mapDispatchToProps)(VenueSearch);