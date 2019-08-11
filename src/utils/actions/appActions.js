import { searchApi } from '../api/searchApi';

export const VENUES_REQUEST = 'VENUES_REQUEST';
export const VENUES_RECEIVED = 'VENUES_RECEIVED';
export const VENUES_ERROR = 'VENUES_ERROR';

const venuesRequest = () => ({
  type: VENUES_REQUEST,
});

const venueDataReceived = venues => ({
  type: VENUES_RECEIVED,
  venues,
});

const venueDataError = error => ({
  type: VENUES_ERROR,
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

export default {
  fetchVenues
};
