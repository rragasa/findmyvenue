import React from 'react';

const Venues = ({venues}) => {

  const venueList = venues.map((item, i) =>
      <li key={i}>{item.name}</li>
    );
  return(
    <ul>
      {venueList}
    </ul>
  );
}

export default Venues;