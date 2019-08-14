import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { fetchVenues } from './utils/actions/appActions';
import VenueSearch from './pages/VenueSearch';
import VenueDetails from './pages/VenueDetails';
class App extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route path="/" exact component={VenueSearch} />
          <Route path="/venue/:id/:venueName" component={VenueDetails} />
        </Switch>
      </Container>
     );
  }
}
const mapStateToProps = ({
  application: {
    venues,
  },
 }) => ({
   venues,
});

 const mapDispatchToProps = dispatch => ({
  getVenues: (payload) => dispatch(fetchVenues(payload))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);
