import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from './utils';
import Input from './Input';

// Use a store factory test utility
// import store from './configureStore'

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  return shallow(<Input store={store} />).dive().dive();
  // console.log(wrapper.debug());
  // wrapper.setState(initialState);
}
setup();
describe('render', () => {

  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(()=> {
      const initialState = { success: false};
      wrapper = setup(initialState);
    })
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

  describe('word has been guessed', () => {
    it('withour error', () => {

    });
    it('no input box', () => {

    });
    it(' no submit button', () => {

    });
  });
});

describe('updating state', () => {

});
