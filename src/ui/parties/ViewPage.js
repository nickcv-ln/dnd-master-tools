import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Redirect } from 'react-router-dom';

import Page from 'ui/common/Page';
import MemberFormContainer from 'ui/parties/members/AddFormContainer';

const ViewPage = ({
  party,
  removeMember,
  increaseLevel,
  decreaseLevel,
}) => {
  if (party === null) {
    return <Redirect to="/" />;
  }

  const trs = Object.keys(party.members).map(key => (
    <tr key={key}>
      <td>{party.members[key].name}</td>
      <td>{party.members[key].ac}</td>
      <td>{party.members[key].level}</td>
      <td>
        <FontAwesomeIcon
          className="mb-2 mr-sm-2 mb-sm-0"
          size="2x"
          onClick={() => removeMember(party.name, key)}
          icon="trash-alt"
        />
        <FontAwesomeIcon
          className="mb-2 mr-sm-2 mb-sm-0"
          size="2x"
          onClick={() => increaseLevel(party.name, key)}
          icon="caret-square-up"
        />
        <FontAwesomeIcon
          className="mb-2 mr-sm-2 mb-sm-0"
          size="2x"
          onClick={() => decreaseLevel(party.name, key)}
          icon="caret-square-down"
        />
      </td>
    </tr>
  ));

  return (
    <Page>
      <h1>{party.name} Members</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Armor Class</th>
            <th>Level</th>
            <th className="pull-right">Remove</th>
          </tr>
        </thead>
        <tbody>
          { trs }
        </tbody>
      </Table>
      <MemberFormContainer party={party.name} />
    </Page>
  );
};

ViewPage.propTypes = {
  party: PropTypes.shape({
    name: PropTypes.string.isRequired,
    members: PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.string,
      ac: PropTypes.string,
    }).isRequired,
  }),
  removeMember: PropTypes.func.isRequired,
  increaseLevel: PropTypes.func.isRequired,
  decreaseLevel: PropTypes.func.isRequired,
};

ViewPage.defaultProps = {
  party: null,
};

export default ViewPage;
