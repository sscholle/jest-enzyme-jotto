import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, storeFactory } from './utils';
import Input, { UnconnectedInput } from './Input';

// Use a store factory test utility
// import store from './configureStore'

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive(); // get through the Connect/HOC to the actual Component
    // console.log(wrapper.debug());
    return wrapper;

}

setup();
describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(()=> {
      const initialState = { success: false};
      wrapper = setup(initialState);
    });
    it('withour error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    it('input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });
    it('submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });

  // describe('word has been guessed', () => {
  //   let wrapper;
  //   beforeEach(()=> {
  //     const initialState = { success: true };
  //     wrapper = setup(initialState);
  //   });
  //   test('withour error', () => {
  //     const component = findByTestAttr(wrapper, 'component-input');
  //     expect(component.length).toBe(1);
  //   });
  //   test('no input box', () => {
  //     const component = findByTestAttr(wrapper, 'input-box');
  //     expect(component.length).toBe(0);
  //   });
  //   test(' no submit button', () => {
  //     const component = findByTestAttr(wrapper, 'submit-button');
  //     expect(component.length).toBe(0);
  //   });
  // });
});

describe('updating state / redux props', () => {
  it('has success state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it('has success state as prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('guessWord action creator call', () => {
  let wrapper;
  let guessWordMock;
  const guessWord = 'train';

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };
    // use mock with unconented component (a manual 'connect')
    wrapper = mount(<UnconnectedInput {...props} />);

    // add value to input box
    wrapper.instance().inputBox.current = { value: guessWord };

    const button = findByTestAttr(wrapper, 'submit-button');
    button.simulate('click');
  });

  test('guessWord was called when Submit was clicked', () => {
    const guessWordMockCalls = guessWordMock.mock.calls.length;
    expect(guessWordMockCalls).toBe(1);
  });

  test('guessWord was called with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessWord);
  });

  test('inputBox clears after submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('');
  });
})
