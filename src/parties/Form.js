import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';

import Input from 'common/Input';


const PartyForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <FormGroup>
      <Label for="party-name">Party Name</Label>
      <Field name="name" component={Input} id="party-name" type="text" />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
);

PartyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'party',
})(PartyForm);
