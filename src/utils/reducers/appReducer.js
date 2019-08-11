import { VENUES_RECEIVED } from '../actions/appActions';

export default (state = {}, action) => {
  switch (action.type) {
    case VENUES_RECEIVED:
      return {
        ...state,
        venues: action.venues,
      };
    default:
      return state;
  }
};
