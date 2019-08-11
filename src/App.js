import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenues } from './utils/actions/appActions';
import Typography from '@material-ui/core/Typography';
import Search from './components/Search';
import Venues from './components/Venues';
import {
  apiVersion as v,
  client_id,
  client_secret,
} from './config.json';

class App extends Component {
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

  render() {
    const { venues = {} } = this.props;
    return (
      <div className="App">
       <header className="App-header">
       <Typography variant="h3" component="h3">Find my venue</Typography>
      </header>
      <Search onSubmit={(location) => this.handleSubmit(location)}/>
      { venues.length > 0 && (
        <Venues venues={venues}/>
      )}
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
