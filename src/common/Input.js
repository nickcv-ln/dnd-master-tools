import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input as InputBootstrap, FormFeedback, FormText } from 'reactstrap';

const Input = ({ input, meta: { touched, error, warning }, ...custom }) => (
  <Fragment>
    <InputBootstrap {...(touched ? { valid: !error } : {})} {...input} {...custom} />
    {error && <FormFeedback>{error}</FormFeedback>}
    {!error && warning && <FormText>{warning}</FormText>}
  </Fragment>
);

Input.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  /* eslint-enable */
};

export default Input;
