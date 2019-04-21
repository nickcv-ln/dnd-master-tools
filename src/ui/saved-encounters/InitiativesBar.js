import React from 'react';
import PropTypes from 'prop-types';

import InitiativePill from 'ui/saved-encounters/InitiativePill';
import { getSortedInitiatives } from 'utils/initiatives';

const InitiativesBar = ({ initiatives, party, setInitiative }) => {
  const pills = getSortedInitiatives(initiatives).map(creature => (
    <InitiativePill
      key={creature.name}
      party={party}
      setInitiative={setInitiative}
      creature={creature}
    />
  ));

  return (
    <div>
      {pills}
    </div>
  );
};

InitiativesBar.propTypes = {
  initiatives: PropTypes.shape({}).isRequired,
  party: PropTypes.string.isRequired,
  setInitiative: PropTypes.func.isRequired,
};

export default InitiativesBar;
