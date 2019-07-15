import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  const getContents = () => {
    if(props.guessedWords.length === 0){
      return <span data-test="guess-instructions">Guess a word</span>
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
