import { FETCH_TABLE, DELETE_PRODUCT } from '../actions/types';
import update from 'immutability-helper';

export default function(state={text: null, products: []}, action) {
  switch(action.type){
    case FETCH_TABLE:
      return action.payload;
    case DELETE_PRODUCT:
      return { text: state.text,
               products: update(state.products, {$splice: [[action.payload, 1]] })
              }
    default:
      return state;
  }
}