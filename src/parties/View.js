import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import Page from 'common/Page';
import MemberForm from 'parties/members/AddFormContainer';

/* eslint-disable */
const View = ({ party, removeMember }) => {
  const trs = Object.keys(party.members).map(key => (
    <tr key={key}>
      <td>{party.members[key].name}</td>
      <td>{party.members[key].level}</td>
      <td><span onClick={() => removeMember(party.name, key)}>delete</span></td>
    </tr>
  ));

  return (
    <Page title={party.name}>
      <h2>Party Members</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th className="pull-right">Remove</th>
          </tr>
        </thead>
        <tbody>
          { trs }
        </tbody>
      </Table>
      <MemberForm party={party.name} />
    </Page>
  );
};

View.propTypes = {
  party: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  removeMember: PropTypes.func.isRequired,
};

export default View;
