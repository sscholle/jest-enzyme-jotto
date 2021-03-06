import { actionTypes } from "actions";

/**
 * @function guessWord
 * @param state - current state
 * @param action - new action to process
 * @returns {boolean} - new sucess state
 */
export default (state = [], action = {}) => {
  // return null;
  switch(action.type) {
    case (actionTypes.GUESS_WORD):
      return [ ...state, action.payload ];
    default:
      return state;
  }
}
