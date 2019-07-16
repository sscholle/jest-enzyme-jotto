import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, getPropErrors } from './utils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      word: 'train', letterMatchCount: 3
    },
  ],
};

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props};
  return shallow(<GuessedWords {...setupProps}/>)
}

describe('GuessedWords', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: []});
  });

  describe('Props', () => {
    it('does not throw warnings with expected props', () => {
      expect(getPropErrors(GuessedWords, defaultProps)).toBeUndefined();
    });
  });

  describe('if there are no words guessed', () => {
    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });
    it('renders instructions to guess a word', () => {
      const component = findByTestAttr(wrapper, 'guess-instructions');
      expect(component.length).toBe(1);
    });
  });

  describe('if there are words guessed', () => {
    let guessedWords;
    guessedWords = [
      {
        word: 'something',
        letterMatchCount: 2,
      },
      {
        word: 'super',
        letterMatchCount: 1,
      },
      {
        word: 'interesting',
        letterMatchCount: 4,
      },
    ];

    // let wrapper;

    beforeEach(() => {
      wrapper = setup({ guessedWords });
    });

    it('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words');
      expect(component.length).toBe(1);
    });
    it('renders "guessed words" section', () => {
      const component = findByTestAttr(wrapper, 'guessed-words');
      expect(component.length).toBe(1);
    });
    it('correct number of guessed words', () => {
      const component = findByTestAttr(wrapper, 'guessed-words-item');
      expect(component.length).toBe(guessedWords.length);
    });
  });
});
