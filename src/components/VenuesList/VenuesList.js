import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';

const VenuesList = ({venues}) => {

  const venueLinks = venues.map((item) => {
    const { id, name } = item;
    const venueName = item.name.replace(/\W+(?!$)/g, '-');
    return (
    <li key={id}>
          <Link key={id} to={`/venue/${venueName}`}>{name}</Link>
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

VenuesList.propTypes = {
  venues: array.isRequired,
}

export default VenuesList;