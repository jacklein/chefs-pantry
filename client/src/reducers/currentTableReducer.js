import { FETCH_TABLE, SUBMIT_PRODUCT, DELETE_PRODUCT } from '../actions/types';
import update from 'immutability-helper';

export default function(state={text: null, category: null, products: []}, action) {
  switch(action.type){
    case FETCH_TABLE:
      return action.payload;
    case SUBMIT_PRODUCT:
      return { text: state.text,
               category: state.category,
               products: update(state.products, { $push: [action.payload] })
              }
    case DELETE_PRODUCT:
      return { text: state.text,
               category: state.category,
               products: update(state.products, { $splice: [[action.payload, 1]] })
              }
    default:
      return state;
  }
}