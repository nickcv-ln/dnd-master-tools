import { createSelector } from 'reselect';
import { getSelectedPartyName } from 'state/parties/selectors';

export const getSavedEncounters = state => state.savedEncounters;
export const getCurrentPartySavedEncounters = createSelector(
  getSavedEncounters,
  getSelectedPartyName,
  (encounters, party) => encounters[party] || null,
);
