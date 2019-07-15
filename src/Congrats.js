import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns a Congratulations message
 * @function
 * @param {object} props
 * @returns {JSX.Element}
 */
const Congrats = ({success}) => (
    <div data-test="component-congrats">
      {success && (<div data-test="congrats-message">Congrats</div>)}
    </div>
);

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
