import { combineReducers } from 'redux';
import currentTableReducer from './currentTableReducer';
import currentModalReducer from './currentModalReducer';

export default combineReducers({
  currentTable: currentTableReducer,
  currentModal: currentModalReducer
});