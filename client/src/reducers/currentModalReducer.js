import { SHOW_MODAL, CLOSE_MODAL } from '../actions/types';

export default function(state = { context: null }, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return { context: null };
    default:
      return state;
  }
}