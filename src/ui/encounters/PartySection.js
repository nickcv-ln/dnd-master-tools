import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Row, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AddParty from 'parties/AddFormContainer';

const PartySection = ({
  isPartySelected,
  doPartiesExist,
  selectedParty,
}) => {
  if (!doPartiesExist) {
    return (
      <div>
        <p>no party found: create one!</p>
        <AddParty />
      </div>
    );
  }

  if (!isPartySelected) {
    return (
      <p>select one party</p>
    );
  }


  const members = Object.keys(selectedParty.members).map(key => (
    <Col key={key} md={2} sm={4} xs={2}>
      { key }: {selectedParty.members[key].level}
    </Col>
  ));
  return (
    <Jumbotron className="p-3 mb-3">
      <h2>
        Party: <kbd>{selectedParty.name}</kbd>
        <Link className="float-right" to={`/parties/view/${selectedParty.name}`}>
          <FontAwesomeIcon
            size="1x"
            icon="edit"
          />
        </Link>
      </h2>
      <Row>
        { members }
      </Row>
    </Jumbotron>
  );
};

PartySection.propTypes = {
  isPartySelected: PropTypes.bool.isRequired,
  doPartiesExist: PropTypes.bool.isRequired,
  selectedParty: PropTypes.shape({
    name: PropTypes.string,
  }),
};

PartySection.defaultProps = {
  selectedParty: null,
};

export default PartySection;
