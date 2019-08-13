import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

class VenueDetails extends Component {


  render() {
    const { match, venue } = this.props;
    const { name } = venue;
    return(
      <div>ID: {match.params.venueName}

      {/* <Typography
              variant="h4"
              component="h4" gutterBottom>{name}</Typography> */}
      </div>
    );
  }
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