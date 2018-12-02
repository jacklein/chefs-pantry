import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import currentTableReducer from './currentTableReducer';
import currentModalReducer from './currentModalReducer';

export default combineReducers({
  form: reduxForm,
  currentTable: currentTableReducer,
  currentModal: currentModalReducer
});