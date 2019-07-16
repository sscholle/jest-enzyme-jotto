import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const getContents = () => {
    if(props.guessedWords.length === 0){
      return <span data-test="guess-instructions">Guess a word</span>
    } else {
      const guessedWordRows = props.guessedWords.map((word, index) => (
        <tr data-test='guessed-words-item' key={index}>
          <td>{word.word}</td>
          <td>{word.letterMatchCount}</td>
        </tr>));
      return <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <td>Guess</td>
              <td>Matching Letters</td>
            </tr>
          </thead>
          <tbody>
            {guessedWordRows}
          </tbody>
        </table>
      </div>
    }
  }
  return <div data-test="component-guessed-words">{getContents()}</div>
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
