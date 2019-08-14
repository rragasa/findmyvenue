import { VENUES_RECEIVED, VENUE_DETAILS_RECEIVED } from '../actions/appActions';

export default (state = {}, action) => {
  switch (action.type) {
    case VENUES_RECEIVED:
      return {
        ...state,
        venues: action.venues,
      };
    case VENUE_DETAILS_RECEIVED:
      return {
        ...state,
        venue: action.venue,
      };
    default:
      return state;
  }
};
