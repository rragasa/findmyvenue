import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class VenuesList extends Component {
  constructor(props) {
    super(props);
    this.handleVenueSelected = this.handleVenueSelected.bind(this);
  }

  handleVenueSelected(event) {
    const { selectVenue } = this.props;
    event.preventDefault();
    const hello = event.currentTarget.dataset["id"];
    selectVenue(hello);
  }

  render() {
    const { venues } = this.props;
    const venueLinks = venues.map((item) => {
      const { id, name } = item;
      const venueName = item.name.replace(/\W+(?!$)/g, '-');
      return (
        <ListItem alignItems="flex-start" key={id}>
          <Link
            to={`/venue/${venueName}`}
            data-id={id}
            onClick={this.handleVenueSelected}
          >
            {name}
         </Link>
        </ListItem>
      )}
    );


    return(
      <Fragment>
        <div className="component-container">
          <List fullwidth>
          {venueLinks}
          </List>
        </div>
      </Fragment>
    );
  }
}

VenuesList.propTypes = {
  venues: array.isRequired,
}

export default VenuesList;