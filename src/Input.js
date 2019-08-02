import React from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions'

export class UnconnectedInput extends React.Component{
  render(){
    const { success } = this.props;
    const contents = (success) ? null :
    <form className="form-inline">
      <input data-test="input-box" className="mb-2 mx-sm3" id="word-guess" type="text" placeholder="enter guess"/>
      <button onClick={this.props.guessWord} data-test="submit-button" type="submit" className="btn btn-primary mb-2">Submit</button>
    </form>;

  return (
    <div data-test="component-input">
      { contents }
    </div>);
  }
}

const mapState = ({ success }) => {
  return { success };
}

export default connect(mapState, { guessWord })(UnconnectedInput);
