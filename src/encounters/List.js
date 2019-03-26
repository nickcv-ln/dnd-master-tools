import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Jumbotron,
  Progress,
  Badge,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Page from 'common/Page';
import AddParty from 'parties/AddFormContainer';
import Monsters from 'encounters/MonstersContainer';
import EncounterDetails from 'encounters/EncounterDetailsContainer';

const List = ({
  isPartySelected,
  doPartiesExist,
  selectedParty,
  thresholds,
  encounterValue,
  save,
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
              icon="edit"
            />
          </Link>
        </h2>
        <Row>
          { members }
        </Row>
      </div>
    );
  }

  let color = 'light';

  if (encounterValue <= thresholds.easy) {
    color = 'success';
  } else if (encounterValue > thresholds.deadly) {
    color = 'dark';
  } else if (encounterValue >= thresholds.hard) {
    color = 'danger';
  } else if (encounterValue >= thresholds.medium) {
    color = 'warning';
  }

  const displayedValue = encounterValue === 0 ? '' : encounterValue;

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
          <Row>
            <Col lg="3" className="text-center">
              <Badge color="success" className="p-2">
                EASY: {thresholds.easy}
              </Badge>
            </Col>
            <Col lg="3" className="text-center">
              <Badge color="warning" className="p-2">
                MEDIUM: {thresholds.medium}
              </Badge>
            </Col>
            <Col lg="3" className="text-center">
              <Badge color="danger" className="p-2">
                HARD: {thresholds.hard}
              </Badge>
            </Col>
            <Col lg="3" className="text-center">
              <Badge color="dark" className="p-2">
                DEADLY: {thresholds.deadly}
              </Badge>
            </Col>
          </Row>
          <Progress color={color} className="my-2" max={thresholds.deadly} value={encounterValue}>
            {displayedValue}
          </Progress>
          <EncounterDetails />
          <Button disabled onClick={save} className="encounter-save">Save</Button>
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
  encounterValue: PropTypes.number.isRequired,
  save: PropTypes.func.isRequired,
};

List.defaultProps = {
  selectedParty: null,
};

export default DragDropContext(HTML5Backend)(List);
