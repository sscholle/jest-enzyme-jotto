import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWords';
import secretWord from './secretWord';

export default combineReducers({
  success,
  guessedWords,
  secretWord
});
