import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { array } from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

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

        <List fullWidth>
        <ListItem alignItems="flex-start">
          <Link
            key={id}
            to={`/venue/${venueName}`}
          >
            {name}
         </Link>
        </ListItem>
        </List>
      )}
    );


    return(
      <Fragment>
        <div className="component-container">
          {venueLinks}
        </div>
      </Fragment>
    );
  }
}

VenuesList.propTypes = {
  venues: array.isRequired,
}

export default VenuesList;