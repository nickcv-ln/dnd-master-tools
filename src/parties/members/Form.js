import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label } from 'reactstrap';

import Input from 'common/Input';


const PartyForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit} inline>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="member-name" className="mr-sm-2">Name</Label>
      <Field
        autoFocus
        name="name"
        autoComplete="off"
        component={Input}
        id="member-name"
        type="text"
      />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="member-level" className="mr-sm-2">Level</Label>
      <Field name="level" component={Input} id="member-level" type="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
      </Field>
    </FormGroup>
    <Button>Submit</Button>
  </Form>
);

PartyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'new-member',
})(PartyForm);
