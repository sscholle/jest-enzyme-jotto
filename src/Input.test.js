import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from './utils';
import Input from './Input';

// Use a store factory test utility
// import store from './configureStore'

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  console.log(wrapper.debug());
  // wrapper.setState(initialState);
}
setup();
describe('render', () => {
  describe('word has not been guessed', () => {
    it('withour error', () => {

    });
    it('input box', () => {

    });
    it('submit button', () => {

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
