import React from 'react';
import PropTypes from 'prop-types';

import InitiativesBarContainer from 'ui/saved-encounters/InitiativesBarContainer';

const EncounterDetails = ({ encounter }) => {
  console.log(encounter);
  if (!encounter) {
    return <div>select an encounter</div>;
  }
  return (
    <div>
      <InitiativesBarContainer />
    </div>
  );
};

EncounterDetails.propTypes = {
  encounter: PropTypes.shape({}),
};

EncounterDetails.defaultProps = {
  encounter: null,
};

export default EncounterDetails;
