import React from 'react';
import { Row, Col } from 'reactstrap';

import Page from 'ui/common/Page';
import SavedEncountersListContainer from 'ui/saved-encounters/SavedEncountersListContainer';
import EncounterDetailsContainer from 'ui/saved-encounters/EncounterDetailsContainer';

const SavedEncountersPage = () => (
  <Page>
    <Row>
      <Col sm={10}>
        <EncounterDetailsContainer />
      </Col>
      <Col sm={2}>
        <SavedEncountersListContainer />
      </Col>
    </Row>
  </Page>
);

export default SavedEncountersPage;
