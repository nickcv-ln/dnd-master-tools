import { createSelector } from 'reselect';
import { getPartyThresholds as getThresholds } from 'utils/thresholds';

export const getParties = state => state.parties;

export const getSelectedPartyName = createSelector(
  getParties,
  parties => parties.currentParty,
);

export const getSelectedParty = createSelector(
  getParties,
  getSelectedPartyName,
  (parties, currentParty) => parties.parties[currentParty],
);

export const isPartySelected = createSelector(
  getSelectedParty,
  selectedParty => !!selectedParty,
);

export const doPartiesExist = createSelector(
  getParties,
  parties => !!parties.list.length,
);

export const getPartyList = createSelector(
  getParties,
  parties => parties.parties,
);

export const getParty = party => createSelector(
  getParties,
  parties => parties.parties[party],
);

export const getPartyThresholds = createSelector(
  getSelectedParty,
  selectedParty => getThresholds(selectedParty),
);
