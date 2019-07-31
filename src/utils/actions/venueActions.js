import { searchVenue } from '../api';

export const VENUES_RECEIVED = 'VENUES_RECEIVED';
export const VENUES_ERROR = 'VENUES_ERROR';

export const getVenues = payload => dispatch => {
  searchVenue(payload).then((venues) => {
    dispatch({
      type: VENUES_RECEIVED,
      venues,
    });
  })
  .catch(error => dispatch({
    type: VENUES_ERROR,
    error,
  }));
}

export default getVenues;