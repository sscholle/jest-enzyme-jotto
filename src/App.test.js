import React from 'react';
import App, { UnconnectedApp } from './App';
import { storeFactory } from 'utils';
import { shallow } from 'enzyme'
import { testNameToKey } from 'jest-snapshot/build/utils';

const setup = (initialState) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<App store={store}/>).dive().dive();
  return wrapper;
}

describe('redux props', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('has access to the success state', () => {
    const success = true;
    wrapper = setup({ success });
    expect(wrapper.instance().props.success).toBe(success)
  });
  it('has access to the guessedWords state', () => {
    const guessedWords = [{ word: 'train', letterMatchCount: 3 }];
    wrapper = setup({ guessedWords });
    expect(wrapper.instance().props.guessedWords).toBe(guessedWords)
  });
  it('has access to getSecretWord action creator prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.getSecretWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on App mount', () => {
  // Mock out the GetSecretWord function to test if it runs
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };

  // Use UnConnectedApp to passin the function as a prop as the connected App will already have access to that prop from Redux
  const wrapper = shallow(<UnconnectedApp {...props} />)
  wrapper.instance().componentDidMount();
  const callCount = getSecretWordMock.mock.calls.length;
  expect(callCount).toBe(1);
});
