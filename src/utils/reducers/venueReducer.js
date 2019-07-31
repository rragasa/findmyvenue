import { VENUES_RECEIVED } from '../actions/venueActions';

export default (state = {}, action) => {
  switch (action.type) {
    case VENUES_RECEIVED:
      return {
        ...state,
        venues: action.venues.data.response.venues
      };
    default:
      return state;
  }
};
