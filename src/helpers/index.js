/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word
 * @param {string} secretWord - Secret word
 * @returns {number} - NUmber of letters that matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}
