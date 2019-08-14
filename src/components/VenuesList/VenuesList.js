import React, { Component } from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class VenuesList extends Component {
  render() {
    const { venues } = this.props;
    const venueLinks = venues.map((item) => {
      const { id, name } = item;
      const venueName = item.name.replace(/\W+(?!$)/g, '-');
      return (
        <ListItem alignItems="flex-start" key={id}>
          <Link
            to={`/venue/${id}/${venueName}`}
            data-id={id}
          >
            {name}
         </Link>
        </ListItem>
      )}
    );

    return(
      <Container maxWidth="md">
        <List fullwidth>
        {venueLinks}
        </List>
      </Container>
    );
  }
}

VenuesList.propTypes = {
  venues: array.isRequired,
}

export default VenuesList;