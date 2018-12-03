import { SET_INDEX, REMOVE_INDEX } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_INDEX:
      return action.payload;
    case REMOVE_INDEX:
      return null;
    default:
      return state;
  }
}