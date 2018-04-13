import { createSelector } from 'reselect';

import { getSelectedPartyName } from 'state/parties/selectors';

export const getEncounters = state => state.encounters;

export const getCurrentPartyEncounter = createSelector(
  getEncounters,
  getSelectedPartyName,
  (encounters, party) => encounters[party] || {},
);
