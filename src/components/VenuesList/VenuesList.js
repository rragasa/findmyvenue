import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';

class VenuesList extends Component {
  constructor(props) {
    super(props);
    this.handleVenueSelected = this.handleVenueSelected.bind(this);
  }

  handleVenueSelected(event) {
    const { selectVenue } = this.props;
    event.preventDefault();
    const hello = event.currentTarget.dataset["id"];
    // this.setState({ selectedVenue: hello });
    // console.log(this.state.selectedVenue)
    selectVenue(hello);
  }

  render() {
    const { venues } = this.props;
    const venueLinks = venues.map((item) => {
      const { id, name } = item;
      const venueName = item.name.replace(/\W+(?!$)/g, '-');
      return (
      <li
        key={id}
        data-id={id}
        onClick={this.handleVenueSelected}
        >
          <Link
            key={id}
            to={`/venue/${venueName}`}
          >
            {name}
          </Link>
      </li>
      )}
    );

    return(
      <Fragment>
        <ul>
          {venueLinks}
        </ul>
      </Fragment>
    );
  }
}

VenuesList.propTypes = {
  venues: array.isRequired,
}

export default VenuesList;