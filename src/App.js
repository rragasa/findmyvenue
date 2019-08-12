import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { fetchVenues } from './utils/actions/appActions';
import Typography from '@material-ui/core/Typography';
import VenueSearch from './pages/VenueSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">
       <Typography variant="h3" component="h3">Find my venue</Typography>
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={VenueSearch} />
        </Switch>
      </Router>
      </div>
     );
  }
}
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

 export default connect(mapStateToProps, mapDispatchToProps)(App);
