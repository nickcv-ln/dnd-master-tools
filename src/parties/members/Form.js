import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';

import Input from 'common/Input';


const PartyForm = ({ handleSubmit }) => {
  const options = (
    <option value="1">1</option>
  );
  return (
    <Form onSubmit={handleSubmit} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="member-name" className="mr-sm-2">Name</Label>
        <Field name="name" autoComplete="off" component={Input} id="member-name" type="text" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="member-level" className="mr-sm-2">Level</Label>
        <Field name="level" component={Input} id="member-level" type="select">
          { options }
        </Field>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

PartyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'new-member',
})(PartyForm);
