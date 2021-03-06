import React from 'react';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
import App from './App'

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { middleWares } from './configureStore';

/**
 * Creates the redux store with Thunk middleware
 * @param {object} initialState - pass in your preferred initial state props
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddlwares = applyMiddleware(...middleWares)(createStore);
  return createStoreWithMiddlwares(rootReducer, initialState);
}

/**
 * Factory Function to Create a shallow wrapper for the App component
 * @param {object} props - setup the App with these React props
 * @param {any} state - inital state
 * @returns {ShallowWrapper}
 */
export const setup = (SomeComponent=App, props={}, state=null) => {
    const wrapper = shallow(<SomeComponent {...props} />);
    if(state){ // can only be used for Class components
      wrapper.setState(state);
    }
    return wrapper;
  }

/**
 * return ShallowWrapper containing node(s) with give 'data-test' value
 * @param {ShallowWrapper} wrapper
 * @param {string} val - the Value of data-test to search for
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
  }

export const getPropErrors = (component, expectedProps) => {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
  return propError;
}
