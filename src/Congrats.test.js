import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, getPropErrors } from './utils';
import Congrats from './Congrats.js'

const defaultProps = { success: false };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  return wrapper;
}

describe('Render Congrats', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('without error', () => {
      const component = findByTestAttr(wrapper,'component-congrats');
      expect(component.length).toBe(1);
  });
  it('no text when success = false', () => {
      const component = findByTestAttr(wrapper,'component-congrats');
      expect(component.text()).toBe('');
  });
  it('non-empty congrats message', () => {
      wrapper.setProps({ success: true });
      const component = findByTestAttr(wrapper,'congrats-message');
      expect(component.text().length).not.toBe(0);
  });
  it('does not throw wraning with expected proptypes', () => {
      const expectedProps = {success: false};
      expect(getPropErrors(Congrats, expectedProps)).toBeUndefined();
  });
})
