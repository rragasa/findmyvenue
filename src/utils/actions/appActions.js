import { searchApi, venueDetailsApi } from '../api';

export const VENUES_REQUEST = 'VENUES_REQUEST';
export const VENUE_DETAILS_REQUEST = 'VENUE_DETAILS_REQUEST';
export const VENUES_RECEIVED = 'VENUES_RECEIVED';
export const VENUE_DETAILS_RECEIVED = 'VENUE_DETAILS_RECEIVED';
export const VENUES_ERROR = 'VENUES_ERROR';
export const VENUE_DETAILS_ERROR = 'VENUE_DETAILS_ERROR';

const venuesRequest = () => ({
  type: VENUES_REQUEST,
});

const venueDetailsRequest = () => ({
  type: VENUE_DETAILS_REQUEST,
});

const venueDataReceived = venues => ({
  type: VENUES_RECEIVED,
  venues,
});

const venueDetailsReceived = venue => ({
  type: VENUE_DETAILS_RECEIVED,
  venue,
});

const venueDataError = error => ({
  type: VENUES_ERROR,
  error,
});

const venueDetailsError = error => ({
  type: VENUE_DETAILS_ERROR,
  error,
});

export const fetchVenues = payload => (dispatch) => {
  dispatch(venuesRequest());
  return searchApi(payload)
    .then((venues) => {
      dispatch(venueDataReceived(venues.data.response.venues));
    })
    .catch(error => dispatch(venueDataError(error)));
};

export const fetchVenueDetails = (id, payload) => (dispatch) => {
  dispatch(venueDetailsRequest());
  return venueDetailsApi(id, payload)
    .then((venue) => {
      dispatch(venueDetailsReceived(venue.data.response.venue));
    })
    .catch(error => dispatch(venueDetailsError(error)));
}

export default {
  fetchVenues,
  fetchVenueDetails,
};
