import { getLetterMatchCount } from "helpers";

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
 * @returns {function} - Redux Thunk
 */
export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        word: guessedWord,
        letterMatchCount
      }
    });

    if(guessedWord === secretWord){
      dispatch({
        type: actionTypes.CORRECT_GUESS
      })
    }
  }
}
