import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  return (
    <h4>
      Name: {props.name}
      <br />
      Age: {props.age}
      <br />
      email:{props.email}
    </h4>
  );
};

Display.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default Display;
