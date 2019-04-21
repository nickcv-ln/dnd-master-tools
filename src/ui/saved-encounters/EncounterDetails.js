import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import InitiativesBarContainer from 'ui/saved-encounters/InitiativesBarContainer';
import {
  rollEncounterInitiatives,
  generatePartyDefaultInitiatives,
} from 'utils/initiatives';

class EncounterDetails extends Component {
  componentDidUpdate(prevProps) {
    const { encounter, party, setInitiative } = this.props;
    if (encounter !== prevProps.encounter) {
      setInitiative(
        party.name,
        rollEncounterInitiatives(encounter.mobs),
        generatePartyDefaultInitiatives(party.members),
      );
    }
  }

  render() {
    const { encounter } = this.props;

    if (!encounter) {
      return <div>select an encounter</div>;
    }

    return (
      <Row>
        <Col sm={3}>
          <InitiativesBarContainer />
        </Col>
        <Col sm={9}>
          ciaooo
        </Col>
      </Row>
    );
  }
}

EncounterDetails.propTypes = {
  party: PropTypes.shape({
    name: PropTypes.string.isRequired,
    members: PropTypes.shape({}).isRequired,
  }).isRequired,
  encounter: PropTypes.shape({}),
  setInitiative: PropTypes.func.isRequired,
};

EncounterDetails.defaultProps = {
  encounter: null,
};

export default EncounterDetails;
