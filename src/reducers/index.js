import { combineReducers } from 'redux';
import success from './successReducer';
import guessWord from './guessWord';

export default combineReducers({
  success,
  guessWord
});
