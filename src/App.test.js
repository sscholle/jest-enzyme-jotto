import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storeFactory } from 'utils';
import { shallow } from 'enzyme'

const setup = (initialState) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<App store={store}/>).dive().dive();
  return wrapper;
}

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

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
})


