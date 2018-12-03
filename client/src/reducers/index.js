import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import currentTableReducer from './currentTableReducer';
import currentModalReducer from './currentModalReducer';
import currentIndexReducer from './currentIndexReducer';

export default combineReducers({
  form: reduxForm,
  currentTable: currentTableReducer,
  currentModal: currentModalReducer,
  currentIndex: currentIndexReducer
});