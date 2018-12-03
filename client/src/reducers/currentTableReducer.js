import { FETCH_TABLE, SUBMIT_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from '../actions/types';
import update from 'immutability-helper';

export default function(state={text: null, category: null, products: []}, action) {
  switch(action.type){
    case FETCH_TABLE:
      return action.payload;
    case SUBMIT_PRODUCT:
      return { ...state,
              products: update(state.products, { $push: [action.payload] })
             }
    case EDIT_PRODUCT:
      return { ...state,
              products: update(state.products, { [action.payload.index]: {$set: action.payload.product} })
             }
    case DELETE_PRODUCT:
      return { ...state, 
              products: update(state.products, { $splice: [[action.payload, 1]] })
             }
    default:
      return state;
  }
}