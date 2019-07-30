import { actionTypes } from "actions";

/**
 * @function successReducer
 * @param state - current state
 * @param action - new action to process
 * @returns {boolean} - new sucess state
 */
export default (state = false, action = {}) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true;
    default:
      return state;
  }
}
