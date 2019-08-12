import React from 'react';
import { connect } from 'react-redux';

const VenueDetails = ({match}) => {

  return(
    <div>ID: {match.params.venueName}</div>
  );
}

const mapStateToProps = ({
  application: {
    venues,
    venue,
  },
 }) => ({
   venues,
   venue,
});


export default connect(mapStateToProps, null)(VenueDetails);