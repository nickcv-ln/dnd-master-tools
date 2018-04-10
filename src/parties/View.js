import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Page from 'common/Page';
import MemberForm from 'parties/members/AddFormContainer';

const View = ({
  party,
  removeMember,
  increaseLevel,
  decreaseLevel,
}) => {
  const trs = Object.keys(party.members).map(key => (
    <tr key={key}>
      <td>{party.members[key].name}</td>
      <td>{party.members[key].level}</td>
      <td>
        <FontAwesomeIcon className="mb-2 mr-sm-2 mb-sm-0" size="2x" onClick={() => removeMember(party.name, key)} icon={['far', 'trash-alt']} />
        <FontAwesomeIcon className="mb-2 mr-sm-2 mb-sm-0" size="2x" onClick={() => increaseLevel(party.name, key)} icon={['far', 'caret-square-up']} />
        <FontAwesomeIcon className="mb-2 mr-sm-2 mb-sm-0" size="2x" onClick={() => decreaseLevel(party.name, key)} icon={['far', 'caret-square-down']} />
      </td>
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
  increaseLevel: PropTypes.func.isRequired,
  decreaseLevel: PropTypes.func.isRequired,
};

export default View;
