import { createSelector } from 'reselect';

export const getParties = state => state.parties;

export const getSelectedParty = createSelector(
  getParties,
  parties => parties.parties[parties.currentParty],
);

export const isPartySelected = createSelector(
  getSelectedParty,
  selectedParty => !!selectedParty,
);

export const doPartiesExist = createSelector(
  getParties,
  parties => !!parties.list.length,
);

export const getParty = party => createSelector(
  getParties,
  parties => parties.parties[party],
);
