import { combineReducers } from 'redux';
import fetchDataReducer from './fetchDataReducer';
import saveDataReducer from './saveDataReducer';

const rootReducer = combineReducers({
  data: fetchDataReducer,
  saveData: saveDataReducer
});

export default rootReducer;
