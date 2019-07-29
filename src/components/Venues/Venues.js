import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
    }
  }

  componentDidMount() {
    this.getRecommendedVenues();
  }

  getRecommendedVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: "V4ZMU1AABSLAVWVND1WJSLGHZWDZI3EONGBTJTUVS0WSXDDW",
      client_secret: "L3QBE5HUSTDLUYVNDDXZY2OY5FHLZ5NMSCIZPHR2LWUIW1RU",
      query: "coffee",
      near: "London",
      v: '20190729'
    };

    axios.get(endPoint + new URLSearchParams(parameters)).then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      });

      console.log(response.data.response.groups[0].items);
    })
    .catch(error => {
      console.log('ERROR: ' + error);
    });
  }

  render() {
    const recommendedVenueList = this.state.venues.map(item => {
      const { id, name } = item.venue;
      return <li key={id}>{name}</li>
    });

    return (
      <div>{recommendedVenueList}</div>
    );
  }
}

export default Search;