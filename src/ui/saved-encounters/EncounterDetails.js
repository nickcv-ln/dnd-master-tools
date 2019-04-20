import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InitiativesBarContainer from 'ui/saved-encounters/InitiativesBarContainer';
import { rollEncounterInitiatives } from 'utils/initiatives';

class EncounterDetails extends Component {
  componentDidUpdate(prevProps) {
    const { encounter, party, setInitiative } = this.props;
    if (encounter !== prevProps.encounter) {
      setInitiative(party, rollEncounterInitiatives(encounter.mobs));
    }
  }

  render() {
    const { encounter } = this.props;

    if (!encounter) {
      return <div>select an encounter</div>;
    }

    return (
      <div>
        <InitiativesBarContainer />
      </div>
    );
  }
}

EncounterDetails.propTypes = {
  party: PropTypes.string.isRequired,
  encounter: PropTypes.shape({}),
  setInitiative: PropTypes.func.isRequired,
};

EncounterDetails.defaultProps = {
  encounter: null,
};

export default EncounterDetails;
