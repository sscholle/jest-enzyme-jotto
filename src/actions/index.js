export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * @function correctGuess
 * @returns {object} - Action with type: CORRECT_GUESS
 */
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

/**
 * @method guessWord
 * @param {string} guessedWord
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {

  }
}
