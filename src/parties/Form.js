import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';

import Input from 'common/Input';


const PartyForm = ({ handleSubmit }) => (
  <Form inline onSubmit={handleSubmit}>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label className="mb-2 mr-sm-2 mb-sm-0" for="party-name">Party Name</Label>
      <Field autoFocus name="name" component={Input} id="party-name" type="text" />
    </FormGroup>
    <Button color="primary">Submit</Button>
  </Form>
);

PartyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'party',
})(PartyForm);
