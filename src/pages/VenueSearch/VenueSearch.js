import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { fetchVenues } from '../../utils/actions/appActions';
import SearchBox from '../../components/SearchBox';
import VenuesList from '../../components/VenuesList';
import {
  apiVersion as v,
  clientId,
  clientSecret,
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
      client_id: clientId,
      client_secret: clientSecret,
      near: location,
    };

    getVenues(payload);
  }

  render() {
    const { venues } = this.props;

    return (
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
}

VenueSearch.defaultProps = {
  venues: [],
};

VenueSearch.propTypes = {
  getVenues: func.isRequired,
  venues: array,
};

const mapStateToProps = ({
  application: {
    venues,
  },
}) => ({
  venues,
});

const mapDispatchToProps = (dispatch) => ({
  getVenues: (payload) => dispatch(fetchVenues(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VenueSearch);
