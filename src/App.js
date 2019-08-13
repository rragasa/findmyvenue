import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { fetchVenues } from './utils/actions/appActions';
import VenueSearch from './pages/VenueSearch';
import VenueDetails from './pages/VenueDetails';
import Background from '../src/css/imgs/portugal.jpg';
class App extends Component {
  render() {
    return (
      <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact component={VenueSearch} />
          <Route path="/venue/:venueName" component={VenueDetails} />
        </Switch>
      </Router>
      </div>
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
