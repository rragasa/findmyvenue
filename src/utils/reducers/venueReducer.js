import { VENUES_RECEIVED } from '../actions/venueActions';

export default (state = {}, action) => {
  switch (action.type) {
    case VENUES_RECEIVED:
      return { ...action.venues };
    default:
      return state;
  }
};
