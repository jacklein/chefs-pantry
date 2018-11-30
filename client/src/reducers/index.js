import { combineReducers } from 'redux';
import currentTableReducer from './currentTableReducer';

export default combineReducers({
  currentTable: currentTableReducer
});