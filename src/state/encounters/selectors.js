import { createSelector } from 'reselect';

import { getSelectedPartyName } from 'state/parties/selectors';
import {
  getEncounterValue as calculateValue,
  getEncounterExp as calculateExp,
} from 'utils/thresholds';

export const getEncounters = state => state.encounters;

export const getCurrentPartyEncounter = createSelector(
  getEncounters,
  getSelectedPartyName,
  (encounters, party) => encounters[party] || {},
);

export const getEncounterValue = createSelector(
  getCurrentPartyEncounter,
  encounter => calculateValue(encounter),
);

export const getEncounterExp = createSelector(
  getCurrentPartyEncounter,
  encounter => calculateExp(encounter),
);
