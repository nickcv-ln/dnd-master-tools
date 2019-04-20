import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import Page from 'ui/common/Page';
import SavedEncountersListContainer from 'ui/saved-encounters/SavedEncountersListContainer';
import EncounterDetailsContainer from 'ui/saved-encounters/EncounterDetailsContainer';

const SavedEncountersPage = ({ isPartySelected, encounters }) => {
  if (!isPartySelected || encounters === null) {
    return <Redirect to="/" />;
  }

  return (
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
};

SavedEncountersPage.propTypes = {
  isPartySelected: PropTypes.bool.isRequired,
  encounters: PropTypes.arrayOf(PropTypes.shape({})),
};

SavedEncountersPage.defaultProps = {
  encounters: null,
};

export default SavedEncountersPage;
