import React from 'react';
import PropTypes from 'prop-types';

import { getSortedInitiatives } from 'utils/initiatives';

const InitiativesBar = ({ initiatives }) => {
  const mobs = getSortedInitiatives(initiatives).map(mob => (
    <p key={mob.name}><strong>{mob.name}:</strong> {mob.display}</p>
  ));

  return (
    <div>
      {mobs}
    </div>
  );
};

InitiativesBar.propTypes = {
  initiatives: PropTypes.shape({}).isRequired,
};

export default InitiativesBar;
