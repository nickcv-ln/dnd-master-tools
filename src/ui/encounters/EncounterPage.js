import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Progress,
  Badge,
  Button,
} from 'reactstrap';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Page from 'ui/common/Page';
import MonstersSectionContainer from 'ui/encounters/MonstersSectionContainer';
import PartySectionContainer from 'ui/encounters/PartySectionContainer';
import EncounterDetailsContainer from 'ui/encounters/EncounterDetailsContainer';
import { getValueColor } from 'utils/thresholds';

const EncounterPage = ({
  thresholds,
  encounterValue,
  save,
}) => {
  const color = getValueColor(encounterValue, thresholds, 'light');
  const displayedValue = encounterValue || '';

  return (
    <Page>
      <Row>
        <Col lg={{ size: 4, order: 2 }}>
          <MonstersSectionContainer />
        </Col>
        <Col lg="8">
          <PartySectionContainer />
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
          <EncounterDetailsContainer />
          <Button disabled onClick={save} className="encounter-save">Save</Button>
        </Col>
      </Row>
    </Page>
  );
};

EncounterPage.propTypes = {
  thresholds: PropTypes.shape({
    easy: PropTypes.number,
    medium: PropTypes.number,
    hard: PropTypes.number,
    deadly: PropTypes.number,
  }).isRequired,
  encounterValue: PropTypes.number.isRequired,
  save: PropTypes.func.isRequired,
};

export default DragDropContext(HTML5Backend)(EncounterPage);
