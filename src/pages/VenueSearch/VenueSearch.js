import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenues } from '../../utils/actions/appActions';
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
  render(){
    const { venues = [] } = this.props;

    return(
      <section id="venueSearch">
        <SearchBox
          onSubmit={(location) => this.handleSubmit(location)}
        />
        { venues.length > 0 && (
          <VenuesList venues={venues}/>
        )}
      </section>
    );
  }
};

const mapStateToProps = ({
  appReducer: {
    venues,
  },
 }) => ({
   venues,
});

 const mapDispatchToProps = dispatch => ({
  getVenues: (payload) => dispatch(fetchVenues(payload))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(VenueSearch);