import React from 'react';
import { connect } from 'react-redux';

const Input = (props) => {
  if(props.success) return null;

  return <div data-test="component-input">
    <form className="form-inline">
      <input data-test="input-box" className="mb-2 mx-sm3" id="word-guess" type="text" placeholder="enter guess"/>
      <button data-test="submit-button" type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>
  </div>
};

const mapState = ({ success }) => {
  return { success };
}

export default connect(mapState)(Input);
