import { actionTypes } from "actions";

/**
 * @function secretWord
 * @param state - current state
 * @param action - new action to process
 * @returns {boolean} - new sucess state
 */
export default (state = null, action = {}) => {
  switch(action.type) {
    case (actionTypes.SET_SECRET_WORD):
      return action.payload;
    default:
      return state;
  }
}
