import { FETCH_TABLE } from '../actions/types';

export default function(state={category: null, products: []}, action) {
  switch(action.type){
    case FETCH_TABLE:{
      return action.payload;
    }
    default:
      return state;
  }
}