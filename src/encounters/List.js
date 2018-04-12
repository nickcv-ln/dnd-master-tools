import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Page from 'common/Page';
import AddParty from 'parties/AddFormContainer';
import Monsters from 'encounters/Monsters';

const List = ({
  isPartySelected,
  doPartiesExist,
  selectedParty,
  thresholds,
}) => {
  const noParty = (
    <div>
      <p>no party found: create one!</p>
      <AddParty />
    </div>
  );

  const selectParty = (
    <p>select one party</p>
  );

  let party = !doPartiesExist ? noParty : selectParty;

  if (isPartySelected) {
    const members = Object.keys(selectedParty.members).map(key => (
      <Col key={key} xl="2" lg="2" md="2" sm="4">
        { key }: {selectedParty.members[key].level}
      </Col>
    ));
    party = (
      <div>
        <h2>
          Party: <kbd>{selectedParty.name}</kbd>
          <Link className="float-right" to={`/parties/view/${selectedParty.name}`}>
            <FontAwesomeIcon
              size="1x"
              icon={['far', 'edit']}
            />
          </Link>
        </h2>
        <Row>
          { members }
        </Row>
      </div>
    );
  }

  return (
    <Page>
      <Row>
        <Col lg={{ size: 4, order: 2 }}>
          <Monsters thresholds={thresholds} />
        </Col>
        <Col lg="8">
          <Jumbotron className="p-3 mb-3">
            { party }
          </Jumbotron>
          <div className="droppable">droppable</div>
        </Col>
      </Row>
    </Page>
  );
};

List.propTypes = {
  isPartySelected: PropTypes.bool.isRequired,
  doPartiesExist: PropTypes.bool.isRequired,
  selectedParty: PropTypes.shape({
    name: PropTypes.string,
  }),
  thresholds: PropTypes.shape({
    easy: PropTypes.number,
    medium: PropTypes.number,
    hard: PropTypes.number,
    deadly: PropTypes.number,
  }).isRequired,
};

List.defaultProps = {
  selectedParty: null,
};

export default DragDropContext(HTML5Backend)(List);
