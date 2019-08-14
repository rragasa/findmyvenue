import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { fetchVenues } from '../../utils/actions/appActions';
import Container from '@material-ui/core/Container';
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
      <Container maxWidth="md" className="component-container">
        <SearchBox
          onSubmit={(location) => this.handleSubmit(location)}
        />
        { venues.length > 0 && (
          <VenuesList
            venues={venues}
          />
        )}
      </Container>
    );
  }
};

const mapStateToProps = ({
  application: {
    venues,
  },
}) => ({
  venues,
});

const mapDispatchToProps = dispatch => ({
  getVenues: (payload) => dispatch(fetchVenues(payload)),
 })

 VenueSearch.propTypes = {
  getVenues: func.isRequired,
 }

 export default connect(mapStateToProps, mapDispatchToProps)(VenueSearch);