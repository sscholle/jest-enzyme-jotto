import React from 'react';
import { connect } from 'react-redux';

const Input = () => {
  return <div>plain div</div>
};

const mapState = (state) => {
  return {};
}

export default connect(mapState)(Input);
