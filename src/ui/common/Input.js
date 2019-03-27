import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input as InputBootstrap } from 'reactstrap';

const Input = ({ input, meta: { touched, error }, ...custom }) => (
  <Fragment>
    <InputBootstrap
      {...(touched ? { valid: !error, invalid: !!error } : {})}
      {...input}
      {...custom}
    />
  </Fragment>
);

Input.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  /* eslint-enable */
};

export default Input;
